/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  const nums = [];
  let bit = 2 ** 31 - 1;
  let time = right - left + 1;
  let i = 0;
  if (time === 1) return left;
  while (time) {
    bit &= left + i;
    time--;
    i++;
    if (bit === 0) return 0;
  }
  return bit;
};
//시간초과
