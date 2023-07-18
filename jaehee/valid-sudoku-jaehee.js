/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let res = true;

  // 가로세로 체크
  for (let i = 0; i < 9; i++) {
    let cols = {};
    let rows = {};
    for (let j = 0; j < 9; j++) {
      let row = board[i][j];
      let col = board[j][i];
      if (row !== ".") {
        if (rows[row]) res = false;
        rows[row] = true;
      }
      if (col !== ".") {
        if (cols[col]) res = false;
        cols[col] = true;
      }
    }
  }

  // 각 블록 체크
  const arrs = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arrs.push(
        board
          .slice(i * 3, (i + 1) * 3)
          .map((arr) => arr.slice(j * 3, (j + 1) * 3))
          .flat()
      );
    }
  }

  arrs.forEach((arr) => {
    let obj = {};
    arr.forEach((v) => {
      if (v !== ".") {
        if (obj[v]) res = false;
        obj[v] = true;
      }
    });
  });

  return res;
};

//24m

/*
1. 알고리즘 or 자료구조 선택 이유
방법이 잘 안 떠오르기도 하고 조건이 간단해서 무지성으로 돌려도 되겠다 싶어 해봤습니다.
역시 효율이 좋지 않네요

2. 시간 복잡도 or 결과

Runtime
86 ms
Beats
32.27%
Memory
49.7 MB
Beats
9.91%

3. 기타 의견 

4. 참고 링크

*/
