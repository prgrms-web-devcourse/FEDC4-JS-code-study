/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	let maxLen = 0
	let currLen = 0
	let str = ''

	for (let i = 0; i < s.length; i++) {
		if (str.includes(s[i])) {
			maxLen = Math.max(maxLen, currLen)
			str = str.substring(str.indexOf(s[i]) + 1)
			currLen = str.length
		}
		currLen++
		str += s[i]
	}
	return Math.max(maxLen, currLen)
}

/*
1. 알고리즘 or 자료구조 선택 이유
hash로 느껴지진 않는데 ...

2. 시간 복잡도 or 결과
runtime: 63 ms / beats 99.37%
memory: 48 mb / beats 47.35%

3. 기타 의견
무난무난하네요

4. 참고 링크
*/
