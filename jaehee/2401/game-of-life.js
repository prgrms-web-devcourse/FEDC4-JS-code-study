const getNextPosition = (lives, original) => {
  if (lives < 2) return 0;
  if (lives === 3) return 1;
  if (lives <= 3) return original;
  if (lives > 3) return 0;
};

const getLives = (x, y, board) => {
  let lives = 0;

  if (board[x - 1] !== undefined && board[x - 1][y - 1] === 1) lives++;
  if (board[x - 1] !== undefined && board[x - 1][y] === 1) lives++;
  if (board[x - 1] !== undefined && board[x - 1][y + 1] === 1) lives++;
  if (board[x] !== undefined && board[x][y - 1] === 1) lives++;
  if (board[x] !== undefined && board[x][y + 1] === 1) lives++;
  if (board[x + 1] !== undefined && board[x + 1][y - 1] === 1) lives++;
  if (board[x + 1] !== undefined && board[x + 1][y] === 1) lives++;
  if (board[x + 1] !== undefined && board[x + 1][y + 1] === 1) lives++;

  return lives;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const origin = Array.from({ length: board.length }, (_, i) => [...board[i]]);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = getNextPosition(getLives(i, j, origin), origin[i][j]);
    }
  }
  return board;
};

/*
1. 알고리즘 or 자료구조 선택 이유
구현

2. 시간 복잡도 or 결과
Runtime
46
ms
Beats
90.22%
of users with JavaScript
Memory
48.29
MB
Beats
6.64%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
