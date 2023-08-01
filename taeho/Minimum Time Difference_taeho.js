/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  timePoints.sort();
  timePoints = timePoints.map((el) => {
    let [hours, minutes] = el.split(":");
    return Number(hours) * 60 + Number(minutes);
  });
  timePoints.push(timePoints[0] + 1440);
  let minDiff = Infinity;
  for (let i = 1; i < timePoints.length; i++) {
    minDiff = Math.min(minDiff, timePoints[i] - timePoints[i - 1]);
  }
  return minDiff;
};

/*
1. 알고리즘 or 자료구조 선택 이유
모두 분처럼 계산한 다음에 어차피 오름차순으로 정렬되어져 나오기 때문에 for문을 돌며 빼주고 그 중 최솟값을 찾는 방식으로 접근했습니다.
근데 처음 푼 풀이에서는 테스트케이스 4개가 틀려서 계속 이런저런 방법을 써보다가 결국 참고를 했는데 그냥 가장 작은 값에 24시간을 분으로 바꾼
1440을 더해주더라고요.. 제가 처음에 푼 방식에서는 00:00 이면 24:00 으로 바꿔주고 00시 이지만 뒤에 분이 00 이 아니라면 그냥 24로 바꾸지 않는?
방법을 이용해서 풀었는데 여기서 문제가 있었던 것 같습니다..

2. 시간 복잡도 or 결과
Runtime 69 ms Beats 94.44%
Memory 44.7 MB Beats 88.9%
*/

// 처음 푼 풀이
// /**
//  * @param {string[]} timePoints
//  * @return {number}
//  */
// var findMinDifference = function (timePoints) {
// 	let result = Infinity;
// 	timePoints.sort();
// 	const num = [];
// 	timePoints.forEach((v) => {
// 		let [hour, min] = v.split(":").map((item) => +item);

// 		if (hour === 0 && min === 0) hour = 24;

// 		let time = hour * 60 + min;

// 		num.push(time);
// 	});

// 	num.sort((a,b)=> b-a)
// 	for (let i = 0; i < num.length - 1; i++) {
// 		const diff = Math.abs(num[i] - num[i + 1]);
// 		result = Math.min(result, diff);
// 	}
// 	return result
// };
