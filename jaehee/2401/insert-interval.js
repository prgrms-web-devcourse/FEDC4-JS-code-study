/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  if (intervals[0][0] > newInterval[1]) return [newInterval, ...intervals];
  if (intervals.at(-1)[1] < newInterval[0]) return [...intervals, newInterval];

  const answer = [];
  const [targetStart, targetEnd] = newInterval;
  let newStart = 0;
  let newEnd = 0;

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (start > targetEnd || end < targetStart) {
      answer.push([start, end]);

      if (
        end < targetStart &&
        intervals[i + 1] &&
        intervals[i + 1][0] > targetEnd
      ) {
        answer.push([targetStart, targetEnd]);
      }
    } else {
      newStart = Math.min(start, targetStart);
      newEnd = Math.max(end, targetEnd);
      while (i < intervals.length && intervals[i][0] <= targetEnd) {
        [start, end] = intervals[i];
        newEnd = Math.max(newEnd, end, targetEnd);
        i++;
      }
      i--;
      answer.push([newStart, newEnd]);
    }
  }
  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열

2. 시간 복잡도 or 결과

Runtime
93
ms
Beats
11.09%
of users with JavaScript
Memory
54.54
MB
Beats
5.08%
of users with JavaScript

3. 기타 의견 
끔찍하게 풀었다... 이런 식으로 풀면 안되고 케이스를 조금 세세히 생각한 다음 풀어야 할 듯

4. 참고 링크

*/
