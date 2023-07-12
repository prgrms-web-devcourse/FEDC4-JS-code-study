/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
	let result = 0
	let visitedIdxArr = [[nums.length - 1, 0]]

	while (visitedIdxArr.length) {
		const [currIdx, count] = visitedIdxArr.shift()
		for (let i = currIdx - 1; i >= 0; i--) {
			if (i + nums[i] < currIdx) continue
			if (!i) {
				result = count + 1
				break
			}
			nums[i] = 0
			visitedIdxArr.push([i, count + 1])
		}
		if (result) break
	}
	return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
DP가 아닌 bfs ;;

2. 시간 복잡도 or 결과
runtime: 594 ms / beats 11.24%
memory: 46.6 mb / beats 11.59%

3. 기타 의견
하하하하하 답을 참고하고 나서야
무조건 가능한 멀리 뛰는 게 이득이라는 것을 알았네요
하하하하하하하

DP 없어졌으면.

4. 참고 링크
*/
