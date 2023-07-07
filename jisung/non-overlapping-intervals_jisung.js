/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  let count = 0;
  let pre = 0;
  intervals.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
  });
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[pre][1]) {
      // 마지막 요소와 i값을 비교!!
      // intervals의 이전값이 크다면 count를 증가시킨다.
      count += 1;
    } else {
      // 같거나 작다면
      pre = i; // pre를 i로 대체해준다.
    }
  }
  return count;
};

/*
1. 알고리즘 or 자료구조 선택 이유
그리디
그리디를 위한 정렬을 해 줌. 
비교하면서 크면 계속 증가! 

2. 시간 복잡도 or 결과
sort함수를 사용했지만 n^2은 아니기 때문에, NlogN이다.
Runtime
262 ms

Memory
74 MB

3. 기타 의견
나름 괜찮은 문제였습니다! 
한 주 고생 많으셨어요!!!!!!!!!!!
4. 참고 링크

*/
