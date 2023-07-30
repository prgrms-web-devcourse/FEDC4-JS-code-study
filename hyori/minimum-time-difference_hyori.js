/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
  const minDiff = timePoints
    .map((time) => {
      const [h, m] = time.split(':')
      return Number(h) * 60 + Number(m)
    })
    .sort((a, b) => a - b)
    .map((time, i, arr) => {
      let diff = arr[i + 1] - time
      if (i === arr.length - 1) {
        diff = time - arr[0]
      }
      return Math.min(diff, 1440 - diff)
    })
  return Math.min(...minDiff)
}

/*
1. 알고리즘 or 자료구조 선택 이유
정렬! 구현!

2. 시간 복잡도 or 결과
runtime: 67 ms / beats 96.3%
memory: 44.95 mb / beats 80.16%

3. 기타 의견
sort와 map을 통해서 풀었습니다!

4. 참고 링크
*/
