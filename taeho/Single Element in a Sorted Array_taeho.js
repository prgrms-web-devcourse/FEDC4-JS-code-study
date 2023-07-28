/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	const stack = [];

	for (const num of nums) {
		if (stack.at(-1) === num) {
			stack.pop();
		} else {
			stack.push(num);
		}
	}
	return stack.join("");
};

/*
1. 알고리즘 or 자료구조 선택 이유
이렇게 풀라고 낸 문제는 아닌 것 같긴 한데.. 보자마자 스택이 떠올라서 해봤더니 통과하네요..

2. 시간 복잡도 or 결과 - O(n)
Runtime 78 ms Beats 5.34%
Memory 46.3 MB Beats 10.26%
*/
