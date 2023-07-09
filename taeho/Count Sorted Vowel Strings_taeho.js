/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
	const words = ["a", "e", "i", "o", "u"]
	let count = 0

	const dfs = (word, start) => {
		if (word.length === n) {
			count++
			return
		}

		for (let i = start; i < words.length; i++) {
			dfs(words[i] + word, i)
		}
	}

	dfs("", 0)

	return count
}

/*
1. 알고리즘 or 자료구조 선택 이유
재귀를 사용하여 단어의 앞에서부터 시작하도록 만들고 단어의 길이가 n과 같을 때에만 count를 증가하는 방식으로 구현했습니다!
프로그래머스 Lv 2 에서 모음사전이란 문제를 푼 적이 있는데 살짝 비슷해서 이 형식이 생각났던 것 같아요!
신경 안쓰고 싶지만 이번에는 런타임이든 메모리든 거의 박살났네요,,

2. 시간 복잡도 or 결과
Runtime 481 ms 
Beats 12.61%

Memory 48.6 MB
Beats 8.4%

O(n^2)
*/
