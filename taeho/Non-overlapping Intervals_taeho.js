/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	let remove = 0
	intervals.sort((a, b) => a[1] - b[1])
	let preEnd = intervals[0][1]

	for (let i = 1; i < intervals.length; i++) {
		const [start, end] = intervals[i]

		if (start < preEnd) {
			remove++
		} else {
			preEnd = end //겹치지 않으므로 이전 end 값을 현재 end로 초기화
		}
	}

	return remove
}

/*
1. 알고리즘 or 자료구조 선택 이유
[start, end] 중 end 값을 기준으로 오름차순 정렬해준 뒤 다음 요소의 시작이 전 요소의 끝보다 값이 작다면 겹치는 값이므로
제거 카운트인 remove를 올려주는 방식으로 구현했습니다.

2. 시간 복잡도 or 결과
Runtime 254 ms 62.87%
Memory 77.6 MB 27.35%

O(nlogn)
*/
