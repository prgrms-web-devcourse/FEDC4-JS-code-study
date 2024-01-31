/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const answer = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let tempStart = intervals[0][0];
  let tempEnd = intervals[0][1];

  intervals.forEach(([start, end]) => {
    if (tempEnd < start) {
      answer.push([tempStart, tempEnd]);
      tempStart = start;
      tempEnd = end;
    } else {
      tempEnd = Math.max(tempEnd, end);
    }
  });

  answer.push([tempStart, tempEnd]);

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열

2. 시간 복잡도 or 결과

Runtime
96
ms
Beats
45.26%
of users with JavaScript
Memory
60.32
MB
Beats
5.14%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
