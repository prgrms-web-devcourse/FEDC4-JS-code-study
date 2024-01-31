const xs = [0, 0, -1, 1];
const ys = [1, -1, 0, 0];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let answer = 0;

  const checkIsland = (x, y) => {
    if (grid[x] === undefined || grid[x][y] !== "1") return;

    grid[x][y] = "0";

    for (let i = 0; i < 4; i++) {
      checkIsland(x + xs[i], y + ys[i]);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        answer++;
        checkIsland(i, j);
      }
    }
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
DFS

2. 시간 복잡도 or 결과
Runtime
74
ms
Beats
57.06%
of users with JavaScript
Memory
51.49
MB
Beats
36.76%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
