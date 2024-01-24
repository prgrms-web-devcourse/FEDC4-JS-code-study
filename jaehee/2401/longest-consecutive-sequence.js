/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const mapp = new Map();
  let answer = 0;

  nums.forEach((v) => {
    mapp.set(v, true);
  });

  nums.forEach((v) => {
    const now = mapp.get(v);
    let right = v + 1;
    let left = v - 1;

    if (now) {
      let temp = 1;
      while (mapp.has(left) && mapp.get(left) !== false) {
        mapp.set(left, false);
        left--;
        temp++;
      }
      while (mapp.has(right) && mapp.get(right) !== false) {
        mapp.set(right, false);
        right++;
        temp++;
      }
      answer = Math.max(answer, temp);
    }
  });

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
hash

2. 시간 복잡도 or 결과

Runtime
123
ms
Beats
53.21%
of users with JavaScript
Memory
78.46
MB
Beats
10.82%
of users with JavaScript

3. 기타 의견 
처음에 Array로 좌표를 다 만들어놓고 했더니 공간 초과가 나서 Map으로 수정

4. 참고 링크

*/
