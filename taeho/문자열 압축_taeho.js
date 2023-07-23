function solution(s) {
	let min = Infinity;

	if (s.length === 1) return 1;

	for (let i = 1; i <= Math.floor(s.length / 2); i++) {
		// 문자열 압축 단위
		let result = [...s]; // 원본 배열을 바꿔버리는 splice 메소드를 쓰기 위해 새로운 변수에 원본을 저장
		const temp = [];
		let count = 1; // 문자열 반복 횟수
		let str = ""; // 반복되다가 다른 문자로 바꼈을 때 체크해줄 변수
		let answer = ""; // 최종 temp의 문자열 버전

		while (result.length) {
			//result에 길이가 없을 때 까지
			const curr = result.splice(0, i).join("");
			if (str !== curr) {
				// 시작 부분이 바뀌면
				str = curr; // 반복을 검사하기 시작할 부분을 str로 지정
				if (count > 1) {
					// 1은 중복할 때 생략한다.
					temp.push(count);
					count = 1;
				}
			}

			if (temp.at(-1) !== curr) {
				// 중복이 아니면
				temp.push(curr);
			} else {
				//중복시 카운트를 올려 몇번 중복되는지 저장
				count++;
				continue;
			}
		}
		if (count > 1) {
			//마지막에는 중복이 발생하여도 count 값이 저장되지 않아서 while 반복문이 끝난 후 푸쉬해줌
			temp.push(count);
		}

		answer = temp.join("");
		min = Math.min(min, answer.length);
	}
	return min;
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제의 예제처럼 중복이 되면 2a, 3a 식으로 압축될 때 a2, 3a 이런식으로 표현해도 문자열 길이가 달라지지 않는 점을 이용해서 문자의 절반 단위까지
반복하며 문자열 압축을 그 안에서의 while 반복문에서 실행해주었습니다..

2. 시간 복잡도 or 결과 - splice를 사용한 부분이나 좀 효율적인 방법으로는 풀지 못한 것 같습니다...
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (1.48ms, 34.2MB)
테스트 3 〉	통과 (0.67ms, 33.7MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.23ms, 33.5MB)
테스트 7 〉	통과 (1.56ms, 34.3MB)
테스트 8 〉	통과 (1.83ms, 34.2MB)
테스트 9 〉	통과 (2.72ms, 34.4MB)
테스트 10 〉	통과 (41.04ms, 38MB)
테스트 11 〉	통과 (0.33ms, 33.5MB)
테스트 12 〉	통과 (0.35ms, 33.5MB)
테스트 13 〉	통과 (0.39ms, 33.5MB)
테스트 14 〉	통과 (2.62ms, 34.5MB)
테스트 15 〉	통과 (0.56ms, 33.6MB)
테스트 16 〉	통과 (0.18ms, 33.5MB)
테스트 17 〉	통과 (5.30ms, 34.8MB)
테스트 18 〉	통과 (5.08ms, 34.7MB)
테스트 19 〉	통과 (5.45ms, 34.7MB)
테스트 20 〉	통과 (19.90ms, 38MB)
테스트 21 〉	통과 (55.20ms, 37.9MB)
테스트 22 〉	통과 (19.98ms, 38MB)
테스트 23 〉	통과 (15.48ms, 34.9MB)
테스트 24 〉	통과 (14.13ms, 34.7MB)
테스트 25 〉	통과 (38.80ms, 37.9MB)
테스트 26 〉	통과 (19.72ms, 37.9MB)
테스트 27 〉	통과 (58.46ms, 37.9MB)
테스트 28 〉	통과 (0.19ms, 33.4MB)
*/
