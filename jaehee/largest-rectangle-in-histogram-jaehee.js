var largestRectangleArea = function (heights) {
  const sortedHeights = Array.from(new Set([...heights].sort((a, b) => a - b)));
  let maxVal = 0;

  sortedHeights.forEach((v) => {
    let tempV = 0;
    heights.forEach((h) => {
      if (h >= v) {
        tempV += v;
        maxVal = Math.max(tempV, maxVal);
      } else {
        tempV = 0;
      }
    });
  });

  return maxVal;
};

var largestRectangleArea = function (heights) {
  const sortedHeights = Array.from(new Set([...heights].sort((a, b) => a - b)));
  let maxVal = heights[0];

  for (let i = 1; i < heights.length; i++) {
    for (let k = 0; k < sortedHeights.length; k++) {
      if (sortedHeights[k] > heights[i]) {
        break;
      }
      let hTemp = 0;
      for (let j = i; j >= 0; j--) {
        if (heights[j] < sortedHeights[k]) {
          break;
        }
        hTemp += sortedHeights[k];
      }
      maxVal = Math.max(hTemp, maxVal);
    }
  }

  return maxVal;
};

// 1h 20m 실패

/*
1. 알고리즘 or 자료구조 선택 이유
1차 시도 - brute force - 한 70퍼센트 통과
2차 시도 - DP를 응용해서 풀어보려 했으나... 시간초과 - 거의 95퍼센트 통과했으나 실패

2. 시간 복잡도 or 결과

3. 기타 의견 

4. 참고 링크

*/
