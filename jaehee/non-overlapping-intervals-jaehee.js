/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let res = 0;
  let curEnd = -Infinity;
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (curEnd > start) {
      if (curEnd >= end) curEnd = end;
      res++;
    } else {
      curEnd = end;
    }
  }

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유
그리디 알고리즘. 겹칠 경우 빨리 끝나는 것을 선택하면 된다.

2. 시간 복잡도 or 결과
O(nlogn)

Runtime
257 ms
Beats
56.10%
Memory
74.6 MB
Beats
79.88%

3. 기타 의견 
리트코드 정말 돌릴 때마다 결과가 천차만별이네요. 최고, 최악인지 정도만 참고해야 할 것 같아요.

4. 참고 링크

*/
