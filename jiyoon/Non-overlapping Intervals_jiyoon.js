/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  let cnt = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  // [ [ 1, 2 ], [ 2, 3 ], [ 1, 3 ], [ 3, 4 ] ]
  const stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (stack[stack.length - 1][1] > intervals[i][0]) {
      cnt++;
    } else {
      stack.push(intervals[i]);
    }
  }
  return cnt;
};

/*
1. 알고리즘 or 자료구조 선택 이유
그리디
1. end를 기준으로 오름차순 정렬한다.
2. stack에 intervals의 첫 번째 값을 넣어 준다.
3. stack의 마지막 요소 end와 intervals의 start 값을 비교한다.
3-1. stack의 end가 intervals의 start보다 크면 cnt 증가
3-2. 같거나 작으면 push

2. 시간 복잡도 or 결과
O(nlogn)
Runtime - 255ms 60.4%
Memory - 74.3MB 91.89%

3. 기타 의견

4. 참고 링크

*/
