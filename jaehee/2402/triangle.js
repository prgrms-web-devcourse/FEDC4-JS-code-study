/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = Array.from({ length: triangle.length }, (_v, i) =>
    new Array(triangle[i].length).fill(Infinity)
  );

  const travle = (depth, loc, count) => {
    if (depth >= triangle.length) {
      return;
    }

    if (triangle[depth][loc] === undefined) return;

    if (dp[depth][loc] <= triangle[depth][loc] + count) {
      return;
    } else {
      dp[depth][loc] = triangle[depth][loc] + count;
    }

    travle(depth + 1, loc, dp[depth][loc]);
    travle(depth + 1, loc + 1, dp[depth][loc]);
  };

  travle(0, 0, 0);

  return Math.min(...dp.at(-1));
};
/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
394
ms
Beats
5.18%
of users with JavaScript
Memory
50.73
MB
Beats
26.19%
of users with JavaScript

3. 기타 의견 
상향식으로 하는게 효율이 더 나은 것 같다.

4. 참고 링크

*/
