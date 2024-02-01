/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const answer = [];

  const getAnswer = (arr, sum) => {
    if (sum === target) {
      answer.push([...arr]);
    }

    const maxValue = Math.max(...arr);

    for (let candidate of candidates) {
      if (sum + candidate > target) continue;
      if (candidate < maxValue) continue;
      arr.push(candidate);
      getAnswer(arr, sum + candidate);
      arr.pop();
    }
  };

  getAnswer([], 0);

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
backtracking

2. 시간 복잡도 or 결과
Runtime
71
ms
Beats
59.71%
of users with JavaScript
Memory
54.90
MB
Beats
10.88%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
