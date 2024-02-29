/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < amount; i++) {
    for (let coin of coins) {
      dp[i + coin] = Math.min(dp[i + coin], dp[i] + 1);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
271
ms
Beats
6.86%
of users with JavaScript
Memory
60.56
MB
Beats
5.17%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
