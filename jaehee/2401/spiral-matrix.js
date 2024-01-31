const xs = [0, 1, 0, -1];
const ys = [1, 0, -1, 0];

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const answer = [];
  let moveType = 0;
  const checks = Array.from({ length: matrix.length }, () =>
    Array.from({ length: matrix[0].length }, () => 0)
  );
  let xCur = 0;
  let yCur = 0;
  let times = 0;
  while (times < 4) {
    while (
      matrix[xCur] !== undefined &&
      matrix[xCur][yCur] !== undefined &&
      !checks[xCur][yCur]
    ) {
      answer.push(matrix[xCur][yCur]);
      times = 0;
      checks[xCur][yCur] = 1;
      xCur += xs[moveType];
      yCur += ys[moveType];
    }
    xCur -= xs[moveType];
    yCur -= ys[moveType];
    moveType += 1;
    times += 1;
    if (moveType >= 4) moveType = 0;
    xCur += xs[moveType];
    yCur += ys[moveType];
  }
  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
matrix

2. 시간 복잡도 or 결과

Runtime
49
ms
Beats
70.40%
of users with JavaScript
Memory
41.81
MB
Beats
46.08%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
