const setZeroColRow = (x, y, matrix) => {
  const xMax = matrix.length;
  const yMax = matrix[0].length;

  for (let i = 0; i < yMax; i++) {
    matrix[x][i] = 0;
  }

  for (let i = 0; i < xMax; i++) {
    matrix[i][y] = 0;
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const origins = Array.from({ length: matrix.length }, (_, i) => [
    ...matrix[i],
  ]);

  for (let i = 0; i < origins.length; i++) {
    for (let j = 0; j < origins[0].length; j++) {
      if (origins[i][j] === 0) {
        setZeroColRow(i, j, matrix);
      }
    }
  }
};

/*
1. 알고리즘 or 자료구조 선택 이유
matrix

2. 시간 복잡도 or 결과

Runtime
79
ms
Beats
25.94%
of users with JavaScript
Memory
53.06
MB
Beats
5.35%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
