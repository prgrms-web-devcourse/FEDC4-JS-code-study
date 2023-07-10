// 참고 1
var pushDominoes = function (dominoes) {
	while (true) {
		const newDominos = dominoes
			.replaceAll("R.L", "_")
			.replaceAll(".L", "LL")
			.replaceAll("R.", "RR")
			.replaceAll("_", "R.L")

		console.log(newDominos)

		if (newDominos === dominoes) {
			console.log("이게 답임", newDominos)
			return newDominos
		}
		dominoes = newDominos
	}
}

// 참고 2
var pushDominoes = function (dominoes) {
	dominoes = dominoes.split("")
	const forceDp = Array(dominoes.length).fill(0)

	//왼쪽에서부터 ->
	for (let index = 0; index < dominoes.length; index++) {
		const domino = dominoes[index]
		if (dominoes[index - 1] !== "R" || domino !== ".") continue
		forceDp[index] = forceDp[index - 1] + 1
		dominoes[index] = "R"
	}

	// forceDp [0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 0]
	// dominoes [".", "L", "R", "R", "R", "L", "R", "R", "R", "L", ".", "."]

	//오른쪽에서부터 <-
	for (let index = dominoes.length - 1; index >= 0; index--) {
		const domino = dominoes[index]
		if (dominoes[index + 1] !== "L") continue
		const force = forceDp[index + 1] + 1

		// 이 부분에서 현재 왼쪽으로 미는 힘이 더 크면 왼쪽으로 밀리는게 맞는 것 같은데
		// 오른쪽으로 미는 힘보다 더 작을 때 조건을 수행하는게 이해가 힘드네요..
		if (force < forceDp[index] || domino === ".") {
			forceDp[index] = force
			dominoes[index] = "L"
			// 힘이 같으면 밀리지 않으므로 .으로 만들어줌
		} else if (force === forceDp[index]) dominoes[index] = "."
	}

	return dominoes.join("")
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제가 제대로 이해가 안되서 참고했습니다.. 두 가지 방법을 참고하면서 첫번째 방법은 이해는 했지만 두번째 방법은 조건문 부분이
제 생각과는 좀 다르네요.. 전반적으로 왜 이렇게 풀지? 에 대한 해답은 얻지 못한 것 같습니다.. 

2. 시간 복잡도 or 결과
Runtime 131 ms
Beats 71.43%

Memory 55.9 MB
Beats 97.96%

O(n)
*/
