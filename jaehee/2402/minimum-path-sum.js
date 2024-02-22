/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (grid.length === 1) return grid[0].reduce((acc, cur) => acc + cur, 0);
  if (grid[0].length === 1) return grid.reduce((acc, cur) => acc + cur[0], 0);
  const dp = Array.from({ length: grid.length }, (_v, i) =>
    new Array(grid[i].length).fill(Infinity)
  );

  const traversal = (xLoc, yLoc, count) => {
    if (xLoc > grid.length - 1 || yLoc > grid[0].length - 1) return;
    if (dp[xLoc][yLoc] <= count + grid[xLoc][yLoc]) return;

    dp[xLoc][yLoc] = count + grid[xLoc][yLoc];

    traversal(xLoc + 1, yLoc, count + grid[xLoc][yLoc]);
    traversal(xLoc, yLoc + 1, count + grid[xLoc][yLoc]);
  };

  traversal(0, 0, 0);

  return dp.at(-1).at(-1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
489
ms
Beats
5.02%
of users with JavaScript
Memory
50.96
MB
Beats
41.74%
of users with JavaScript

3. 기타 의견 
dfs 느낌의 dp로 가면 효율이 안 좋다. 왼쪽과 윗쪽의 결과만 가지고 반복문을 돌리는 식으로 하면 효율이 좋다.

4. 참고 링크

*/
