/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function (words) {
	words.sort((str1, str2) => str2.length - str1.length)
	const wordsMap = new Set()
	const result = []

	for (const word of words) {
		if (result.length && word.length < result[0].length) continue

		if (wordsMap.has(word)) continue

		if (wordsMap.has(word.substring(0, word.length - 1))) {
			result.push(word)
			continue
		}

		const savedStr = []

		for (let i = word.length - 1; i >= 0; i--) {
			const preStr = word.substring(0, i)
			if (!words.includes(preStr)) break

			savedStr.push(preStr)
		}

		if (savedStr.length === word.length - 1) {
			result.push(word)
			savedStr.forEach((str) => wordsMap.add(str))
		}
	}
	return result.length ? result.sort()[0] : ''
}

/*
1. 알고리즘 or 자료구조 선택 이유
hash

2. 시간 복잡도 or 결과
runtime: 101 ms / beats 78.46%
memory: 45.3 mb / beats 90.77%

3. 기타 의견
뭔가 복잡하게 풀었는데 .. 모범답안이 굉장히 간결하고 짧더군요 !

모범 답안:
var longestWord = function (words) {
	const wordsSet = new Set(words)
	words.sort(
		(a, b) => b.length - a.length || Number(a > b) || Number(a === b) - 1
	)
	function everyComb(str) {
		let result = '',
			strLength = str.length - 1
		for (let i = 0; i < strLength; ++i) {
			let char = str[i]
			result += char
			if (!wordsSet.has(result)) return false
		}
		return true
	}
	return words.find(everyComb) || ''
}

find를 이렇게 활용하는 게 진짜 대단하다는 생각이 들었네요 .. 활용 ㄷㄷㄷ


4. 참고 링크
*/
