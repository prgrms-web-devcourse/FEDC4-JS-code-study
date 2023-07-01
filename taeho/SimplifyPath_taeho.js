var simplifyPath = function (path) {
	path = path.split("/")

	const stack = []

	for (const item of path) {
		if (item === "." || item === "") continue // 아무것도 하지 않아도 됨
		else if (item === "..") stack.pop() // 상위 디렉토리로 이동해야 하므로 여기선 제거
		else stack.push(item)
	}

	return "/" + stack.join("/") // 경로의 시작은 /, 디렉토리는 하나의 슬래시로 구분되므로 /로 join('/')
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제를 제대로 이해하지 못해 시간이 좀 걸렸지만 풀이는 생각보다 간단했던 것 같습니다!!
문제를 제대로 읽지 않아서 그랬던 것 같습니다..

2. 시간 복잡도 or 결과
O(n) 인 것 같습니다!

*/
