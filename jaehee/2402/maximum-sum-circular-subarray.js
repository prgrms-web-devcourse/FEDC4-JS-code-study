/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let maxSum = -Infinity;
  let localSum = [-Infinity, -1];
  const doubleNums = [...nums, ...nums];

  for (let i = 0; i < doubleNums.length; i++) {
    if (localSum[1] === i % nums.length) {
      if (localSum[0] - nums[i % nums.length] > localSum[0]) {
        localSum = [localSum[0] - nums[i % nums.length], (i % nums.length) + 1];
        for (let j = i % nums.length; j < nums.length - 1; j++) {
          if (localSum[0] - doubleNums[j] > localSum[0]) {
            localSum = [localSum[0] - doubleNums[j], j + 1];
          }
        }
      } else {
        break;
      }
    } else {
      if (localSum[0] + doubleNums[i] <= doubleNums[i]) {
        localSum = [doubleNums[i], i];
      } else {
        localSum = [localSum[0] + doubleNums[i], localSum[1]];
      }
    }

    if (maxSum < localSum[0]) maxSum = localSum[0];
    console.log(localSum, maxSum);
  }

  return maxSum;
};

// 틀림
