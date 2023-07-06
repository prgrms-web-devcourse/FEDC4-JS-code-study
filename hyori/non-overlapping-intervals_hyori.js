/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
	intervals.sort((a, b) => a[1] - b[1])

	let result = 0
	const MIN_VALUE = -50001
	let savedEndPoint = MIN_VALUE

	for (const [start, end] of intervals) {
		if (start < savedEndPoint) result++
		else savedEndPoint = end
	}

	return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
그리디 알고리즘

2. 시간 복잡도 or 결과
runtime: 225 ms / beats 98.40%
memory: 76.6 mb / beats 31.34%

3. 기타 의견
대표적인 그리디 문제네요!

4. 참고 링크
*/
