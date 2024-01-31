const xs = [0, 0, 1, -1];
const ys = [1, -1, 0, 0];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const checks = Array.from({ length: board.length }, () =>
    Array.from(
      {
        length: board[0].length,
      },
      () => 0
    )
  );

  const isNotSurrounded = (x, y) => {
    if (checks[x] && checks[x][y] === 1) return 0;
    if (checks[x]) checks[x][y] = 1;
    if (board[x] !== undefined && board[x][y] === "X") return 0;
    if (board[x] === undefined || board[x][y] === undefined) {
      return 1;
    }

    let answer = 0;

    for (let i = 0; i < 4; i++) {
      answer += isNotSurrounded(x + xs[i], y + ys[i]);
    }

    return answer;
  };

  const flip = (x, y) => {
    if (board[x] !== undefined && board[x][y] === "O") {
      board[x][y] = "X";
      for (let i = 0; i < 4; i++) {
        flip(x + xs[i], y + ys[i]);
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O" && !checks[i][j] && !isNotSurrounded(i, j)) {
        flip(i, j);
      }
    }
  }
  return board;
};

/*
1. 알고리즘 or 자료구조 선택 이유
DFS

2. 시간 복잡도 or 결과
Runtime
88
ms
Beats
33.37%
of users with JavaScript
Memory
58.64
MB
Beats
12.89%
of users with JavaScript

3. 기타 의견 
불필요한 조건 처리 줄이기

4. 참고 링크

*/
