/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length;
  let mid = 0;

  if (nums.length === 1) return 0;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (mid === 0 && nums[mid + 1] < nums[mid]) return mid;
    if (mid === nums.length - 1 && nums[mid - 1] < nums[mid]) return mid;
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
};

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
Runtime
58
ms
Beats
27.56%
of users with JavaScript
Memory
49.19
MB
Beats
5.85%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
