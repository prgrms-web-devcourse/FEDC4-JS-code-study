/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const targetX = obstacleGrid.length - 1;
  const targetY = obstacleGrid[0].length - 1;
  let answer = 0;

  const filterWrongValue = (num) => {
    if (num === undefined) return 0;
    if (num === -1) return 0;
    return num;
  };

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = -1;
    }
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === -1) continue;

      const left = filterWrongValue(obstacleGrid[i - 1]?.[j]);
      const up = filterWrongValue(obstacleGrid[i]?.[j - 1]);

      obstacleGrid[i][j] = left + up;
      if (i === 0 && j === 0) obstacleGrid[i][j] = 1;
    }
  }

  return obstacleGrid.at(-1).at(-1) === -1 ? 0 : obstacleGrid.at(-1).at(-1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime
51
ms
Beats
82.98%
of users with JavaScript
Memory
49.53
MB
Beats
32.03%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
