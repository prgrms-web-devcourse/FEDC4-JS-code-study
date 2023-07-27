/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let left = 0,
    right = nums.length

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (mid % 2) mid--

    if (nums[mid] !== nums[mid + 1]) {
      right = mid
      continue
    }

    left = mid + 2
  }

  return nums[left]
}

/*
1. 알고리즘 or 자료구조 선택 이유
이분탐색

2. 시간 복잡도 or 결과
runtime: 44 ms / beats 99.79%
memory: 44.7 mb / beats 72.86%

3. 기타 의견
드디어 이분탐색을 통해 푸는 문제가 나왔습니다 ..

4. 참고 링크

*/
