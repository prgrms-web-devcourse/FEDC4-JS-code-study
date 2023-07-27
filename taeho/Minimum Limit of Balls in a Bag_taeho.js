/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
	let minPenalty = 1;
	let maxPenalty = Math.max(...nums);

	// 이진 검색 함수
	const binarySearch = (min, max) => {
		while (min < max) {
			const mid = Math.floor((min + max) / 2);
			// 현재 penalty로 모든 nums 배열 요소를 나누어서 몇 번의 연산이 필요한지 계산
			let operationsNeeded = 0;
			for (const num of nums) {
				operationsNeeded += Math.ceil(num / mid) - 1;
			}

			if (operationsNeeded <= maxOperations) {
				// operationsNeeded가 maxOperations보다 작거나 같으면 penalty를 줄여야 함
				max = mid;
			} else {
				// operationsNeeded가 maxOperations보다 크면 penalty를 늘려야 함
				min = mid + 1;
			}
		}

		return min;
	};
	return binarySearch(minPenalty, maxPenalty);
};

// 최소 1, 최대 9
// 중간 5
// 연산횟수 1
// 최소변화있음? 1, 최대변화있음? 5
// 중간 3
// 연산횟수 2
// 최소변화있음? 1, 최대변화있음? 3
// 중간 2
// 연산횟수 4
// 최소변화있음? 3, 최대변화있음? 3

// 정답 : 3

/*
1. 알고리즘 or 자료구조 선택 이유
문제를 잘못 이해한건지 for-of 문의 연산이 필요한 횟수를 구하는 로직이 자꾸만 틀려서 gpt의 힘을 빌렸습니다.. 저만 그런지 모르겠는데 리트코드의
문제는 한번에 이해하기가 힘드네요..

2. 시간 복잡도 or 결과 - O(n)
Runtime 122 ms Beats 70%
Memory 54.1 MB Beats 20%
*/
