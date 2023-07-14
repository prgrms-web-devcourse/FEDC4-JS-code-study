/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
	const student = ["A", "L", "P"]; //결석, 지각, 현재

	console.log(getPermutations(student, 2));
};

const getPermutations = function (arr, selectNumber) {
	const result = [];
	if (selectNumber === 1) return arr.map((el) => [el]);

	arr.forEach((fixed, index, origin) => {
		const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

		const permutations = getPermutations(rest, selectNumber - 1);

		const attached = permutations.map((el) => [fixed, ...el]);

		result.push(...attached);
	});

	return result;
};

// 1. 알고리즘 or 자료구조 선택 이유
// DP이긴 하지만 문제를 보자마자 조합..? 순열..? 이런게 생각나서 이런식으로 한번 풀어보려고 했는데.. 역시 생각했던 그런 값이 안나오네요..
// n의 크기별로 메모이제이션?을 사용해서 푸는 문제인 것 같긴한데 점화식 같은게 전혀 안떠오르네요..
