/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answer = [];
  const n = nums.length;

  const getPermute = (arr) => {
    if (arr.length === n) {
      answer.push([...arr]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (arr.indexOf(nums[i]) === -1) {
        arr.push(nums[i]);
        getPermute(arr);
        arr.pop();
      }
    }
  };

  getPermute([]);

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
backtracking

2. 시간 복잡도 or 결과
Runtime
65
ms
Beats
57.82%
of users with JavaScript
Memory
52.25
MB
Beats
16.58%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
