// 2023.07.28 07:30~7:44
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left];
};

/*
1. 알고리즘 or 자료구조 선택 이유
문제 조건에 O(logn) 또는 O(1)이여서 이진 탐색

2. 시간 복잡도 or 결과
O(logn)
Runtime - 58ms 76.60%
Memory - 45.45MB 17.39%

3. 기타 의견
mid가 짝, 홀 인덱스의 경우를 나누어서 풀었습니다.

4. 참고 링크

*/
