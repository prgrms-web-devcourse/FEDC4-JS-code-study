/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
	let count = 0
	const length = nums.length

	while (Math.max(...nums) !== 0) {
		if (nums.every(v => v % 2 === 0)) {
			for (let i = 0; i < length; i++) {
				nums[i] /= 2
			}
			count++
		} else {
			for (let i = 0; i < length; i++) {
				if (nums[i] % 2 === 1) {
					nums[i]--
					count++
				}
			}
		}
	}
	return count
}

/*
1. 알고리즘 or 자료구조 선택 이유
처음 nums 배열에서 [0,0,0] 을 만들어주기 위해 거꾸로 진행했습니다. 모두 짝수이면 나눠주고 홀수가 있다면 그 부분만 1을 빼주는 식으로
연산 횟수를 구했습니다!  

2. 시간 복잡도 or 결과
Runtime 137ms 45.45 %
Memory 46.3MB 90.91 %

O(n^2)
*/
