/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const xs = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );
  const ys = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );
  const anss = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );

  for (let i = 0; i < matrix.length; i++) {
    let streak = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        streak++;
      } else {
        streak = 0;
      }
      xs[i][j] = streak;
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let streak = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === "1") {
        streak++;
      } else {
        streak = 0;
      }
      ys[j][i] = streak;
    }
  }

  let answer = 0;

  for (let i = 0; i < matrix.length; i++) {
    anss[i][0] = matrix[i][0] === "1" ? 1 : 0;
    answer = Math.max(answer, anss[i][0]);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    anss[0][j] = matrix[0][j] === "1" ? 1 : 0;
    answer = Math.max(answer, anss[0][j]);
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      let streak = Math.min(xs[i][j], ys[i][j]);
      if (streak <= 1) {
        anss[i][j] = streak;
      } else {
        if (anss[i - 1][j - 1] >= streak - 1) {
          anss[i][j] = streak;
        } else {
          anss[i][j] = Math.min(streak, anss[i - 1][j - 1] + 1);
        }
      }
      answer = Math.max(answer, anss[i][j]);
    }
  }

  return answer ** 2;
};
/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
93
ms
Beats
47.94%
of users with JavaScript
Memory
60.41
MB
Beats
13.75%
of users with JavaScript

3. 기타 의견 


4. 참고 링크

*/
