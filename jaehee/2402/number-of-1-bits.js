/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  let times = 32;
  while (times) {
    count += n & 1;
    n >>>= 1;
    times--;
  }
  return count;
};
