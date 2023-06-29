var maxSlidingWindow = function (nums, k) {
  let left2rightSum = new Array(nums.length);
  let right2leftSum = new Array(nums.length);
  let result = new Array(nums.length - k + 1);

  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i % k === 0) max = nums[i];
    if (max < nums[i]) max = nums[i];
    left2rightSum[i] = max;
  }

  max = nums[nums.length - 1];
  for (let i = nums.length - 1; 0 <= i; i--) {
    if (i % k === k - 1) max = nums[i];
    if (max < nums[i]) max = nums[i];
    right2leftSum[i] = max;
  }

  for (let left = 0; left < nums.length - k + 1; left++) {
    let right = left + k - 1;
    result[left] = Math.max(right2leftSum[left], left2rightSum[right]);
  }

  return result;
};
