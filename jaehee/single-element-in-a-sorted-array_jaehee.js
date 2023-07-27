/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === nums[mid - 1] || nums[mid] === nums[mid + 1]) {
      if (nums.indexOf(nums[mid]) % 2 === 0) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      return nums[mid];
    }
  }
};

/*
1. 알고리즘 or 자료구조 선택 이유
O(logn)으로 처리해야하므로 이진탐색을 사용했습니다.

2. 시간 복잡도 or 결과

Runtime
62 ms
Beats
58.98%
Memory
44.5 MB
Beats
87.80%

3. 기타 의견 

4. 참고 링크

*/
