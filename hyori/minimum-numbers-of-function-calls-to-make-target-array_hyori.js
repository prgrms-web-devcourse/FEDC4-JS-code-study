/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  let result = 0

  while (nums.some((i) => i > 1)) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 1) {
        result += nums[i] % 2
        nums[i] = Math.floor(nums[i] / 2)
      }
    }
    result++
  }

  result += nums.filter(i => i).length
  return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
그리디 알고리즘

nums부터 [0, 0, 0, ...] 으로 만들기까지 거꾸로 구현합니다.

2. 시간 복잡도 or 결과
runtime: 89 ms / beats 100%
memory: 49.8 mb / beats 28.57%

3. 기타 의견
이 문제가 이번 문제들 중 제일 쉬웠습니다!

4. 참고 링크
*/