const xs = [0, 0, -1, 1, -1, -1, 1, 1];
const ys = [1, -1, 0, 0, -1, 1, -1, 1];

const isInterrupted = (board, x, y) => {
  for (let i = 0; i < 8; i++) {
    let tempX = x + xs[i];
    let tempY = y + ys[i];
    while (board[tempX] && board[tempX][tempY]) {
      if (board[tempX][tempY] === "Q") {
        return true;
      }
      tempX += xs[i];
      tempY += ys[i];
    }
  }

  return false;
};

const makeForm = (board) => {
  console.log(board);
  return board.map((v) => v.join(""));
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = Array.from({ length: n }, () => new Array(n).fill("."));
  const answer = [];

  const getValid = (queenNums, board) => {
    if (queenNums === n) {
      answer.push(makeForm(board));
      return;
    }

    for (let i = 0; i < n; i++) {
      board[queenNums][i] = "Q";
      if (!isInterrupted(board, queenNums, i)) {
        getValid(queenNums + 1, board);
      }
      board[queenNums][i] = ".";
    }
  };

  getValid(0, board);

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
backtracking

2. 시간 복잡도 or 결과
Runtime
140
ms
Beats
9.50%
of users with JavaScript
Memory
58.20
MB
Beats
5.45%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
