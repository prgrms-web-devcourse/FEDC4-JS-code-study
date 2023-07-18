/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	for (let i = 0; i < board.length; i++) {
		const rows = new Set(); //행 부분 체크
		const columns = new Set(); //열 부분 체크
		const cells = new Set(); // 3 * 3 셀 체크
		for (let j = 0; j < board[i].length; j++) {
			const currRow = board[j][i];
			const currCol = board[i][j];
			// 내가 생각했던 로직
			// const cellCol = j % 3;
			// const cellRow = Math.floor(j / 3);

			const cellValue = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)];

			if (rows.has(currRow) || columns.has(currCol) || cells.has(cellValue)) {
				return false;
			}

			board[j][i] !== "." && rows.add(board[j][i]);
			board[i][j] !== "." && columns.add(board[i][j]);
			cellValue !== "." && cells.add(cellValue);
		}
	}
	return true;
};

/*
1. 알고리즘 or 자료구조 선택 이유
반복 없이라는 키워드를 보고 set을 생각했고 행이나 열을 검사하는 부분은 비교적 쉽게 구현했습니다.. 근데 3*3 크기의 박스를 만들어 그 안에서
검사를 해주는 부분에서 시간이 많이 걸렸습니다.. 제가 생각했던 로직은 행을 뜻하는 i가 0일때 0,1,2 i가 1일 때 0,1,2 i가 2일 때 0,1,2
이런식으로 하면 되지 않을까 했는데 위의 풀이에서 3*3 크기이기 때문에 3을 곱해주는 건 이해가 가지만 전체적인 풀이는 이해가 어렵네요..

2. 시간 복잡도 O(n^2)
Runtime 74 ms Beats 71.81%
Memory 43.7 MB Beats 99.68%
*/
