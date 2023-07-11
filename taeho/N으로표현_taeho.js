function solution(N, number) {
	// 2차원 배열 초기화
	const dp = new Array(9).fill().map(() => new Set())

	// 각 N 값 별로 초기값 설정
	for (let i = 1; i <= 8; i++) {
		dp[i].add(Number(N.toString().repeat(i)))
	}

	// 다이나믹 프로그래밍으로 dp 배열 업데이트
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j < i; j++) {
			for (const operand1 of dp[j]) {
				for (const operand2 of dp[i - j]) {
					dp[i].add(operand1 + operand2)
					dp[i].add(operand1 - operand2)
					dp[i].add(operand1 * operand2)
					if (operand2 !== 0) {
						dp[i].add(Math.floor(operand1 / operand2))
					}
				}
			}
		}
	}

	// 최소 사용 횟수 반환
	for (let i = 1; i <= 8; i++) {
		if (dp[i].has(number)) {
			return i
		}
	}

	// 사용 횟수가 8을 초과하는 경우
	return -1
}

/*
1. 알고리즘 or 자료구조 선택 이유
gpt의 힘을 빌렸습니다... 어떤 느낌인지는 이해를 했는데 저녁에 한번 더 공책에 쓰면서 자세히 이해해 볼 생각입니다..

이 문제에서는 작은 N 값부터 시작하여 큰 N 값으로 진행하면서 모든 가능한 조합을 탐색하여 최소 사용 횟수를 구할 수 있습니다.
이를 위해 2차원 배열을 생성하고, 배열의 각 원소에는 해당 N 값을 사용하여 만들 수 있는 숫자들의 집합을 저장합니다.
예를 들어, dp[3]에는 N을 3번 사용하여 만들 수 있는 숫자들의 집합이 저장됩니다.
숫자를 만들 때는 사칙연산을 사용하므로 사칙연산의 조합을 통해 새로운 숫자를 만들어 나갑니다.
이를 위해 이중 반복문을 사용하여 dp 배열을 업데이트하고, 새로운 숫자를 만들 때마다 해당 숫자를 저장합니다.
최종적으로 우리가 원하는 number가 dp 배열에 있는지 확인하고, 그 때의 사용 횟수를 반환합니다. 만약 사용 횟수가 8을 초과한다면 -1을 반환합니다.

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (10.79ms, 38.4MB)
테스트 2 〉	통과 (2.67ms, 33.9MB)
테스트 3 〉	통과 (11.03ms, 38.3MB)
테스트 4 〉	통과 (14.36ms, 38.9MB)
테스트 5 〉	통과 (13.07ms, 38.6MB)
테스트 6 〉	통과 (15.90ms, 39MB)
테스트 7 〉	통과 (17.89ms, 39MB)
테스트 8 〉	통과 (14.60ms, 39MB)
테스트 9 〉	통과 (15.74ms, 39MB)
*/
