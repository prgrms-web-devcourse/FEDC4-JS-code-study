function solution(N, number) {
	const set = new Array(8).fill().map(() => new Set())
	for (let i = 0; i < 8; i++) {
		set[i].add(Number(`${N}`.repeat(i + 1)))
		for (let j = 0; j < i; j++) {
			for (const arg1 of set[j]) {
				for (const arg2 of set[i - j - 1]) {
					set[i].add(arg1 + arg2)
					set[i].add(arg1 - arg2)
					set[i].add(arg1 * arg2)
					set[i].add(Math.floor(arg1 / arg2))
				}
			}
		}

		if (set[i].has(number)) {
			return i + 1
		}
	}
	return -1
}

/* 2시간 투자했지만 쓰레기 풀이
function solution(N, number) {
	if (N === number) return 1

	let result = -1
	let count = 1
	const MAX_COUNT = 8
	let calculatedNums = [N]
	const savedAllNums = new Set([N])

	while (count <= MAX_COUNT) {
		count++
		const newCalculatedNums = []
		console.log(calculatedNums)

		while (calculatedNums.length) {
			const num = calculatedNums.pop()
			const [add, sub, div, mul, concat] = [
				num + N,
				num - N,
				Math.floor(num / N),
				num * N,
				Number(num + N.toString()),
			]

			if (
				add === number ||
				sub === number ||
				mul === number ||
				div === number ||
				concat === number
			) {
				result = count
				break
			}

			if (!savedAllNums.has(add)) {
				newCalculatedNums.push(add)
				savedAllNums.add(add)
			}
			if (!savedAllNums.has(mul)) {
				newCalculatedNums.push(mul)
				savedAllNums.add(mul)
			}
			if (!savedAllNums.has(div)) {
				newCalculatedNums.push(div)
				savedAllNums.add(div)
			}
			if (!savedAllNums.has(concat)) {
				newCalculatedNums.push(concat)
				savedAllNums.add(concat)
			}
			if (sub && !savedAllNums.has(sub)) {
				newCalculatedNums.push(sub)
				savedAllNums.add(sub)
			}
		}
		if (result !== -1) break
		calculatedNums = newCalculatedNums
	}

	return result
}


1. 알고리즘 or 자료구조 선택 이유
DP 알고리즘

2. 시간 복잡도 or 결과
-

3. 기타 의견
진짜 이 문제로 인해서 DP랑 영영 이별하고 싶네요.
그냥 절대 답 모르겠어서 베꼈습니다.
답 봐도 이해하고 싶지 않네요 ...................^^


4. 참고 링크
*/
