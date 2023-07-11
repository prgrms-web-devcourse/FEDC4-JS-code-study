/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	const length = nums.length
	const dp = Array(length).fill(Infinity) // 최소 점프 횟수를 저장할 배열

	dp[0] = 0 // 출발 지점의 점프 횟수는 0

	for (let i = 1; i < length; i++) {
		// i는 점프로 도달할 수 있는 최소값을 지정해주기 위해
		for (let j = 0; j < i; j++) {
			// 실질적으로 j에서 수행
			if (j + nums[j] >= i) {
				// i에 도달할 수 있는 경우
				dp[i] = Math.min(dp[i], dp[j] + 1)
				break
			}
		}
	}

	return dp[length - 1]
}

/*
1. 알고리즘 or 자료구조 선택 이유
dp 배열을 Infinity를 통해 큰 수로 초기화 해준 후 i를 고정해두고 j의 변화를 통해 현재 위치에서 최대 길이(nums[j]) 를 더했을 때 
도달할 수 있는지 체크하고 최소 점프 값을 갱신해줬습니다..!  

2. 시간 복잡도 or 결과
실행 시간 450ms
비트 13.92 %

메모리 44.7MB
비트 25.9 %

O(n^2) 인 것 같네요..?
*/
