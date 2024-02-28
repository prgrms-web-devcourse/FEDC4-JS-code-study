/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const li = [];
  let temp = prices[0];
  let tempSum = 0;
  for (let i = 1; i < prices.length; i++) {
    if (temp <= prices[i]) {
      tempSum += prices[i] - temp;
    } else {
      li.push(tempSum);
      tempSum = 0;
    }
    temp = prices[i];
  }
  li.push(tempSum);

  li.sort((a, b) => b - a);
  console.log(li);
  if (li[0] && li[1]) return li[0] + li[1];
  if (li[0]) return li[0];
  return 0;
};

// fail
