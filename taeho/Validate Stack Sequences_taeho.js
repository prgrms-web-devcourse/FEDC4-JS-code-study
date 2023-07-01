var validateStackSequences = function (pushed, popped) {
	const stack = []
	let pointer = 0

	for (const value of pushed) {
		stack.push(value)

		while (stack.length > 0 && stack[stack.length - 1] === popped[pointer]) {
			stack.pop()
			pointer++
		}
	}
	return stack.length === 0
}

// 1. [1,2,3,4] 에서 조건이 일치하여 pop() [1,2,3], pointer = 1
// 2. 3과 5는 다르므로 다시 for of 문 진행
// 3. [1,2,3,5] 조건 일치하여 pop() [1,2,3], pointer = 2
// 4. 계속 조건이 일치하므로 스택은 빈 배열이 된다. -> true

/*
1. 알고리즘 or 자료구조 선택 이유
스택의 뒤에서부터 원하는 요소가 popped 배열에 올바른 순서에 들어있지 않다면 pop()이 진행되지 않도록 설계해 보았습니다.
잘 생각이 나지 않아 참고를 했습니다! 아직도 알고리즘적인 부분이 많이 부족한 것 같네요..

2. 시간 복잡도 or 결과
O(n) 일까요? O(n^2)은 아닌 것 같아서 궁금합니다!

*/
