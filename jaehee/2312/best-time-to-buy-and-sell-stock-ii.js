/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let temp = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const now = prices[i];

    if (now < temp) {
      temp = now;
      continue;
    }

    if (now > temp) {
      profit += now - temp;
      temp = now;
    }
  }

  return profit;
};

/*
1. 알고리즘 or 자료구조 선택 이유
포인터?

2. 시간 복잡도 or 결과
Runtime
99
ms
Beats
5.54%
of users with JavaScript
Memory
42.37
MB
Beats
38.72%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
