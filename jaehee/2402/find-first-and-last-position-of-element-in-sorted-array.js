/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  let startIdx = -1;
  let endIdx = -1;

  if (nums.length === 0) return [-1, -1];
  if (nums[0] === target && nums.at(-1) === target) return [0, nums.length - 1];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (
      nums[mid] === target &&
      (nums[mid - 1] < target || nums[mid - 1] === undefined)
    ) {
      startIdx = mid;
      break;
    }

    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = nums.length - 1;
  mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (
      nums[mid] === target &&
      (nums[mid + 1] > target || nums[mid + 1] === undefined)
    ) {
      endIdx = mid;
      break;
    }

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [
    startIdx === -1 ? endIdx : startIdx,
    endIdx === -1 ? startIdx : endIdx,
  ];
};

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
Runtime
49
ms
Beats
80.09%
of users with JavaScript
Memory
49.64
MB
Beats
14.47%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
