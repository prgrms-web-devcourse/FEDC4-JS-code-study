// 46m
/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
  // 시간을 분으로 계산
  const byMinutes = timePoints.map((v) => {
    const vv = v.split(':');
    const hour = Number(vv[0]);
    const minute = Number(vv[1]);
    const time = hour * 60 + minute;
    return time;
  });

  byMinutes.sort((a, b) => a - b);
  console.log(byMinutes); // [ 0, 0, 1439 ]

  let minGap = Infinity;
  for (let i = 1; i < byMinutes.length; i++) {
    const gap = byMinutes[i] - byMinutes[i - 1];

    // 첫 번째와 마지막 시간의 gap 계산
    if (i === byMinutes.length - 1) {
      const endGap = byMinutes[0] + 1440 - byMinutes[i];
      minGap = Math.min(minGap, Math.min(gap, endGap));
    } else {
      minGap = Math.min(minGap, gap);
    }
  }
  return minGap;
};

/*
1. 알고리즘 or 자료구조 선택 이유
구현

2. 시간 복잡도 or 결과
O(nlogn)
Runtime 71ms 90.48%
Memory 45.68MB 48.41%

3. 기타 의견
주의 ! 시계의 원형 특징을 간과하면 안됩니다.

4. 참고 링크
*/
