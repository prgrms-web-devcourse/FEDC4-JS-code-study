/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	const result = []

	people.sort((a, b) => {
		return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
	})

	for (let i = 0; i < people.length; i++) {
		const [_, count] = people[i]

		result.splice(count, 0, people[i])
	}

	return result
}

// [ [ 7, 0 ] ]
// [ [ 7, 0 ], [ 7, 1 ] ]
// [ [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
// [ [ 5, 0 ], [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
// [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 1 ] ]
// [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]

//----------------------------------------------------------------------------------------------------

// 첫 번째 풀이 방법
// var reconstructQueue = function(people) {

//     const result = []

//     people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])); // 오름차순 정렬

//     for(let i=0; i<people.length; i++){
//         let count = people[i][1]

//         for(let j=0; j<people.length; j++){
//             if(count === 0 && !result[j]){
//                 result[j] = people[i]
//                 break
//             }

//             else if(!result[j] || result[j][0] >= people[i][0]){
//                 count--
//             }
//         }
//     }
//     return result
// };

/*
1. 알고리즘 or 자료구조 선택 이유
첫 번째 방법은 작은 값을 먼저 배치해주고 같은 count로 들어온 더 큰 키를 가진 사람은 뒤로 밀려도 영향을 받지 않으므로 그 점을 이용해보았습니다.
최종 풀이는 솔루션을 참고하여 더 간결한 코드가 되도록 리팩토링 했습니다.. 이해는 되는데 이렇게 생각해내기가 어렵네요.. 

2. 시간 복잡도 or 결과
Runtime 90 ms
Memory 47.4 MB

O(n^2)
*/
