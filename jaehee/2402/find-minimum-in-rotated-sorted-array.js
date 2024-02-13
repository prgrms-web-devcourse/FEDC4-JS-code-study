/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let answer = Infinity;
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  if (nums.length === 1) return nums[0];

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (nums[start] < nums[end]) {
      answer = Math.min(answer, nums[start], nums[mid]);
      end = mid - 1;
    } else {
      answer = Math.min(answer, nums[end], nums[mid]);
      if (nums[mid] < nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
Runtime
47
ms
Beats
84.43%
of users with JavaScript
Memory
48.15
MB
Beats
40.66%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
