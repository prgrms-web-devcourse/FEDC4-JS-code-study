/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let nums = [];

  matrix.forEach((v) => {
    nums = [...nums, ...v];
  });

  let start = 0;
  let end = nums.length;
  let mid = 0;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
Runtime
51
ms
Beats
68.76%
of users with JavaScript
Memory
52.03
MB
Beats
5.38%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
