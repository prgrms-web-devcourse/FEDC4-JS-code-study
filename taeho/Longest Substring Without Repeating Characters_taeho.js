/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length < 2) return s.length; //길이가 2보다 작을 땐 그 길이가 가장 최댓값

	const words = new Set();
	let maxCount = 0;

	let i = 0,
		j = 0;

	while (i < s.length && j < s.length) {
		if (!words.has(s[j])) {
			words.add(s[j]);
			j++;
			maxCount = Math.max(maxCount, j - i);
		} else {
			words.delete(s[i]);
			i++;
		}
	}
	return maxCount;
};

/*
1. 알고리즘 or 자료구조 선택 이유
투포인터 방식으로 같은 단어를 가지고 있지 않다면 j++로 인해 인덱스를 증가시켜주었고 같은 단어가 나온 시점에서 같은 단어가 없는 시점으로 돌아가
다시 갯수를 세야될 것 같아서 i를 사용해 제거해주고 증가시켜주었습니다. i는 뺀 단어의 값이고 j는 계속 나아가는 s의 단어들이므로 그 값을
빼서 가장 큰 카운트를 계산했습니다.

2. 시간 복잡도 O(n) ??
Runtime 86 ms Beats 66.94%
Memory 47.5 MB Beats 51.30%
*/
