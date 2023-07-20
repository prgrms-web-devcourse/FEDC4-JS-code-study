/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let prefixRem = 0, res = 0
  let map = {}
  for (let i = 0; i < k; i++) {
      map[i] = 0
  }
  map[0] = 1

  for (let num of nums) {
      prefixRem = (prefixRem + num % k + k) % k
      res += map[prefixRem]
      map[prefixRem]++
  }
  return res

}

/*
1. 알고리즘 or 자료구조 선택 이유
해시

2. 시간 복잡도 or 결과

3. 기타 의견
이건 도저히 못 풀 것 같아서 답을 봤는데,
자세한 풀이를 봐도 완벽한 이해가 안되네요 ..

i부터 j까지 나머지 크기가 같다면, 해당 사이 하위배열들의 나머지는 전부 0이다 ? 라는 공식이 있다는데
이해가 너무 어렵습니다 ㅠㅠ
그거와 부분배열 개수를 구하는 부분이 이해가 잘 되지 않았네요
이과 분들의 친절한 설명이 필요합니다 ..

4. 참고 링크
*/