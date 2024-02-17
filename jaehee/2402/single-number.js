/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const s = new Set();

  nums.forEach((v) => {
    s.has(v) ? s.delete(v) : s.add(v);
  });

  return Array.from(s)[0];
};
