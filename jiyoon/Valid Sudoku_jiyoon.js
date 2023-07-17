// 2023.07.17 18:30~18:58
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rowSet = new Set();
  const colSet = new Set();
  const boxSet = new Set();

  // row 검증
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue;
      } else if (!rowSet.has(board[i][j])) {
        rowSet.add(board[i][j]);
      } else {
        return false;
      }
    }
    rowSet.clear();
  }
  // col 검증
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === '.') {
        continue;
      } else if (!colSet.has(board[j][i])) {
        colSet.add(board[j][i]);
      } else {
        return false;
      }
    }
    colSet.clear();
  }
  // 3*3 검증
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          const num = board[i + x][j + y];
          if (num === '.') {
            continue;
          } else if (!boxSet.has(num)) {
            boxSet.add(num);
          } else {
            return false;
          }
        }
      }
      boxSet.clear();
    }
  }
  return true;
};
/*
1. 알고리즘 or 자료구조 선택 이유
Set 사용

2. 시간 복잡도 or 결과
O(1)?
Runtime - 74ms 71.97%
Memory - 44.61MB 83.06%

3. 기타 의견
문제 조건에 충실하게 풀어서 다소 코드가 긴데,
답을 보니까 더 간결하게 풀 수 있군요..!

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};

4. 참고 링크

*/
