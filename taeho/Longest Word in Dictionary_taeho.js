/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
	words.sort(); //사전 오름차순 정렬
	const res = []; // 사전 역할을 할 배열
	let result = "";

	for (let i = 0; i < words.length; i++) {
		const curr = words[i];
		// 현재 word가 단어의 시작점 이거나 현재 단어가 apple이라면 appl을 포함하고 있다면
		if (curr.length === 1 || res.includes(curr.slice(0, -1))) {
			res.push(curr);
			if (result.length < curr.length) {
				//단어가 길면 result를 바꿔줌
				// 사전순으로 들어오기 때문에 길이가 더 크지 않는 이상 사전순으로 낮은 순위가 된다.
				result = curr;
			}
		}
	}
	return result;
};

// 처음 풀이
// var longestWord = function (words) {
// 	words.sort();
// 	let str = words[0];

// 	for (let i = 0; i < words.length; i++) {
// 		const curr = words[i];

// 		if (!curr.includes(str)) {
// 			continue;
// 		}
// 		str = curr;
// 	}
// 	return str
// };

/*
1. 알고리즘 or 자료구조 선택 이유
사전 오름차순으로 정렬 해준 후 사전에서 현재 워드의 마지막 단어를 뺀 나머지를 포함하고 있다면 사전에 단어를 추가해주고 그 최대길이를
변경해주는 방식으로 풀었습니다! 처음에는 이해를 잘 하지 못해 예시만 보고 풀었다가 정답이길래 좋아했는데 역시 테스트케이스에서 걸리네요...

2. 시간 복잡도 O(words길이 * 단어의 길이) 인 것 같네요..?
Runtime 98 ms Beats 79.10%
Memory 44.6 MB Beats 100%
*/
