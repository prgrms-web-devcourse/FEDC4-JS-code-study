/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = Array.from({ length: prices.length + 1 }, () =>
    Array.from({ length: k + 1 }, () =>
      Array.from({ length: 2 }, (_v, i) => {
        if (i % 2 === 0) return -Infinity;
        return 0;
      })
    )
  );

  dp[0][0][0] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0][0] = Math.max(dp[i - 1][0][0], -prices[i]);
    dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i][0][0] + prices[i]);
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < k; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j - 1][1] - prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i][j][0] + prices[i]);
    }
  }
  let ans = 0;
  for (let time = 0; time < k; time++) {
    ans = Math.max(dp[prices.length - 1][time][1], ans);
  }
  return ans;
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
232
ms
Beats
27.94%
of users with JavaScript
Memory
68.59
MB
Beats
29.41%
of users with JavaScript

3. 기타 의견 
풀긴 풀었으나 제대로 이해가 안 된 부분이 있다. 다시보기

4. 참고 링크

*/
