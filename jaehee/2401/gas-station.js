/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const needs = [];
  for (let i = 0; i < gas.length; i++) {
    needs[i] = gas[i] - cost[i];
  }
  // -2 3 -2 3 -2

  const answer = [];

  for (let i = 0; i < gas.length; i++) {
    let start = needs[i];
    if (start < 0) continue;
    for (let j = 1; j < gas.length; j++) {
      start += needs[i + j > gas.length - 1 ? i + j - gas.length : i + j];
      if (start < 0) break;
    }
    if (start >= 0) return i;
  }

  return -1;
};

/*
1. 알고리즘 or 자료구조 선택 이유
x

2. 시간 복잡도 or 결과

3. 기타 의견 

4. 참고 링크

*/
