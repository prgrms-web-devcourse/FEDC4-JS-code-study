/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let mid = 0;

  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }

  while (start < end) {
    mid = Math.floor(start + end / 2);

    if (nums[mid] > nums[mid + 1]) break;

    if (nums[start] > nums[end]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  mid++;

  const rightNums = [...nums.slice(mid), ...nums.slice(0, mid)];

  let left = 0;
  let right = rightNums.length;
  let center = 0;

  let rightCheck = 0;
  let leftCheck = 0;

  while (left < right) {
    center = Math.floor(left + right / 2);

    if (rightNums[center] === target) {
      return center + mid;
    }

    if (rightNums[center] > target) {
      right = center - 1;
      leftCheck = 0;
      rightCheck = 1;
    } else {
      left = center + 1;
      leftCheck = 1;
      rightCheck = 0;
    }
  }
  if (rightNums[left] === target) return left + mid - leftCheck;
  if (rightNums[right] === target) return right + mid - rightCheck;

  return -1;
};

// 틀림
// 어딘가에서부터 꼬였다...
