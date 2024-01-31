/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 1) return 1;

  points.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let tempEnd = points[0][1];

  for (let i = 0; i < points.length; i++) {
    const [start, end] = points[i];
    if (tempEnd < start) {
      tempEnd = end;
      answer++;
    } else {
      tempEnd = Math.min(end, tempEnd);
    }
  }

  return answer + 1;
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열

2. 시간 복잡도 or 결과

Runtime
220
ms
Beats
32.52%
of users with JavaScript
Memory
75.14
MB
Beats
37.25%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
