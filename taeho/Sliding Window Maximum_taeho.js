/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
	const queue = []
	const result = []

	for (let i = 0; i < nums.length; i++) {
		while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
			queue.pop()
		}
		queue.push(i)

		if (queue[0] === i - k) {
			queue.shift()
		}

		if (i >= k - 1) {
			result.push(nums[queue[0]])
		}
	}
	return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
처음엔 slice를 이용해 그 안에서 최댓값을 구하는 식으로 풀고 런 돌렸더니 성공하길래 엄청 쉽네 하고 있었는데
시간 초과로 오류가 나더라구요.. 유튜브 파이썬으로 푸는 강의도 보고 솔루션도 보고 하는데 이해가 잘 안되는 것 같습니다..
솔루션 복붙해서 한거라 다시 한번 이해해서 제대로 풀어보도록 하겠습니다..

2. 시간 복잡도 or 결과
O(n) 으로 풀어야되는 것 같아요!

*/
