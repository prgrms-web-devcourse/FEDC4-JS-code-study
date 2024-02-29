/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const target = dp.slice(0, i).filter((v, idx) => nums[idx] < nums[i]);
    let last = Math.max(...target);
    if (last === -Infinity) last = 0;
    const maxVal = Math.max(last + 1);

    dp[i] = maxVal;
  }

  return Math.max(...dp);
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp로 풀어야 했는데 떠오르지 않아 모두 확인하는 방식으로 처리

2. 시간 복잡도 or 결과
Runtime
250
ms
Beats
10.35%
of users with JavaScript
Memory
55.71
MB
Beats
5.12%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
