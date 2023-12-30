/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = Array.from({ length: nums.length }, () => 1);
  const right = Array.from({ length: nums.length }, () => 1);
  const answer = Array.from({ length: nums.length }, () => 1);

  left[0] = 1;
  right[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
    right[i] = nums[nums.length - i] * right[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[nums.length - 1 - i];
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열, 구간 합

2. 시간 복잡도 or 결과
Runtime
89
ms
Beats
55.36%
of users with JavaScript
Memory
57.91
MB
Beats
7.69%
of users with JavaScript


3. 기타 의견 
다시 풀어보기

4. 참고 링크

*/
