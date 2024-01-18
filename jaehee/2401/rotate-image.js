/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  const original = Array.from({ length: len }, (_, i) => [...matrix[i]]);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = original[len - 1 - j][i];
    }
  }
};

/*
1. 알고리즘 or 자료구조 선택 이유
matrix

2. 시간 복잡도 or 결과

Runtime
51
ms
Beats
70.46%
of users with JavaScript
Memory
42.48
MB
Beats
25.91%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
