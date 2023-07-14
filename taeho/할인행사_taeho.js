function solution(want, number, discount) {
	let day = 0;

	const isMatch = (discount) => {
		const wanted = new Map();

		discount.forEach((item) => {
			// slice 되어 들어온 배열을 맵 객체를 통해 item : item 갯수 형태로 만들어줌
			wanted.set(item, wanted.get(item) + 1 || 1);
		});

		for (let i = 0; i < want.length; i++) {
			if (wanted.get(want[i]) !== number[i]) {
				// 원하는 아이템의 갯수가 맵 객체의 값과 다르면 이 날이 아니다.
				return false;
			}
		}
		return true;
	};

	// 마트의 행사일 마다 10일 동안 판매하는 품목을 나타내주기 위한 반복문
	for (let i = 0; i < discount.length; i++) {
		if (i + 10 > discount.length) break;

		const currDiscount = discount.slice(i, i + 10);
		if (isMatch(currDiscount)) {
			day++;
		}
	}
	return day;
}

/*
1. 알고리즘 or 자료구조 선택 이유
주어진 조건인 10일을 기준으로 할인 품목을 나타내주고 그것을 원하는 갯수와 수량만큼 검사해주면 되지 않을까 해서 풀게 되었습니다.
처음에는 2중 for문으로 풀어볼까 했지만 좀 복잡해지는 것 같아서 검사하는 함수를 따로 만들어 주었습니다! 예전에 풀었던 기억이 있는데
다시 보니까 코드가 비슷하네요..

2. 시간 복잡도 or 결과 O(10(일) * want)..?
테스트 1 〉	통과 (10.99ms, 37.5MB)
테스트 2 〉	통과 (56.99ms, 40.4MB)
테스트 3 〉	통과 (16.01ms, 37.9MB)
테스트 4 〉	통과 (49.49ms, 38.8MB)
테스트 5 〉	통과 (36.16ms, 39.4MB)
테스트 6 〉	통과 (8.03ms, 37.4MB)
테스트 7 〉	통과 (18.98ms, 38MB)
테스트 8 〉	통과 (60.71ms, 42.3MB)
테스트 9 〉	통과 (15.77ms, 38MB)
테스트 10 〉	통과 (36.00ms, 39.7MB)
테스트 11 〉	통과 (9.92ms, 37.5MB)
테스트 12 〉	통과 (0.10ms, 33.4MB)
*/
