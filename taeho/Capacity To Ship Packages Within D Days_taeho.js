/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
	let max = Math.max(...weights); //left
	let limitSumWeights = weights.reduce((acc, cur) => acc + cur); //right

	// 이 부분에서 어떨 때는 right 보다 작을 때 어떨 때는 작거나 같을 때를 사용하는데 구분하는게 어렵네요..
	while (max < limitSumWeights) {
		let middleCapacity = Math.floor((max + limitSumWeights) / 2); //mid
		let accWeights = 0; // 누적 무게
		let countDays = 1;
		for (let i = 0; i < weights.length; i++) {
			accWeights += weights[i];
			if (accWeights > middleCapacity) {
				//누적시키다가 무게가 중간값을 넘어서면 날짜를 증가시키고 현재 무게로 누적 무게를 초기화
				countDays++;
				accWeights = weights[i];
			}
		}
		if (countDays > days) {
			// 이 조건을 만족하면 짐을 더 쌓아도 된다
			max = capacityWeights + 1;
		} else {
			// 너무 많이 쌓음
			limitSumWeights = capacityWeights;
		}
	}
	return limitSumWeights;
};

/*
1. 알고리즘 or 자료구조 선택 이유
지윤님의 코드와 참고링크를 보고 풀었습니다.. 제가 아는 이분탐색으로 mid를 구하고 값이 너무 크다면 right를 mid-1 로 옮겨주고
반대라면 left를 mid+1 로 옮겨주는 방식이었는데 좀 꼬인 문제가 나오니까 풀기가 너무 어렵네요.. 여기서는 else 문에서 왜 mid값을 바로
할당해줘야만 답이 나오는지 잘모르겠네요..! 혹시 몰라서 - 1도 해보고 while 반복문 조건을 작거나 같다 로도 변경해봤는데 전부 오류가 발생했습니다.. 

2. 시간 복잡도 or 결과
Runtime 86 ms Beats 71.36%
Memory 46.9 MB Beats 15.8%
*/
