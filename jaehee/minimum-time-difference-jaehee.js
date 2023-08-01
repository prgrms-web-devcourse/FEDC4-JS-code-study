/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let res = Infinity;
  timePoints.sort();

  const getDifference = (now, after) => {
    const [nowH, nowM] = now.split(":").map((v) => +v);
    const [afterH, afterM] = after.split(":").map((v) => +v);

    return (afterH - nowH) * 60 + (afterM - nowM);
  };

  for (let i = 0; i < timePoints.length - 1; i++) {
    res = Math.min(res, getDifference(timePoints[i], timePoints[i + 1]));
  }

  // 처음과 끝 시간의 차이만 별도로 처리
  res = Math.min(
    res,
    getDifference(timePoints.at(-1), "24:00") +
      getDifference("00:00", timePoints[0])
  );

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유
파싱해서 단순하게 처리

2. 시간 복잡도 or 결과
O(NlogN)

Runtime
96 ms
Beats
20.80%
Memory
51.4 MB
Beats
5.60%

3. 기타 의견 

4. 참고 링크

*/
