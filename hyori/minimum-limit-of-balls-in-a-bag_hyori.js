/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */

// 다른 풀이 참고
const minimumSize = function (nums, maxOperations) {
  let left = 1,
    right = Math.max(...nums)

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let count = 0

    for (let i = 0; i < nums.length; i++) {
      count += Math.ceil(nums[i] / mid) - 1
    }

    if (count > maxOperations) left = mid + 1
    else right = mid
  }

  return left
}

/*
1. 알고리즘 or 자료구조 선택 이유
이분 탐색

2. 시간 복잡도 or 결과
좋음

3. 기타 의견
접근을 전혀 못해서 답을 봤는데,
코드 자체는 이해가 가능한데 수학 원리가 이해가 안되네요 ..
왜 mid 값으로 모든 원소를 나누고, ceil - 1 값의 합계를 구해서 비교하는 건지 이유를 모르겠습니다.
특히 Math.ceil(9 / 5) - 1와 Math.ceil(10 / 5) - 1의 경우 답이 2, 1이 나오게 되는데

9보다 10이 더 큰 수인데 9가 2로 나오게 하는 이유를 모르겠네요

4. 참고 링크
*/
