/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
	let [left, right, numOfTrue, numOfFalse, max] = new Array(5).fill(0);
	const changes = () => numOfTrue > k && numOfFalse > k;
	while (right < answerKey.length) {
		if (answerKey[right] === "T") numOfTrue++;
		if (answerKey[right] === "F") numOfFalse++;
		while (changes()) {
			if (answerKey[left] === "T") numOfTrue--;
			if (answerKey[left] === "F") numOfFalse--;
			left++;
		}
		max = Math.max(max, right - left + 1);
		right++;
	}
	return max;
};

/*
1. 알고리즘 or 자료구조 선택 이유
솔루션을 참고했습니다.. T, F를 체크하면서 값을 최대값을 뽑기 위해 값을 변경해 줄 로직이 하나도 생각이 안났던 것 같아요...
이 솔루션도 문제에 대한 흐름은 이해를 했지만 changes 함수부분이 만족하면 left를 증가시킨다. 이 부분은 이해가 잘 안되네요..
left포인터를 이동하여 변경 가능한 횟수를 맞춰주는 로직이라고는 하는데 이걸 이용해서 T나 F라는 값이 최대 연속길이가 되도록
변경해준다? 라고 생각하면 어렵네요..

2. 시간 복잡도 or 결과 - O(n)
Runtime 74 ms Beats 91.6%
Memory 45.5 MB Beats 36.52%
*/
