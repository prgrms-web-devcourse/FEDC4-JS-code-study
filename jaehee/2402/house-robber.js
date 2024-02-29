/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = [
    nums[0],
    Math.max(nums[0], nums[1]),
    Math.max(nums[0] + nums[2], nums[1]),
  ];

  for (let i = 3; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp.at(-1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
51
ms
Beats
62.61%
of users with JavaScript
Memory
48.71
MB
Beats
43.51%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
