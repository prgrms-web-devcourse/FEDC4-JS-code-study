/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let res = Infinity;
  // 최소 중량은? -> 이 중량이면 가능? 문제로 변경
  let left = 1;
  let right = weights.reduce((acc, cur) => acc + cur, 0);

  const getShippingDays = (loadPerDay) => {
    let currentDays = 1;
    let currentLoad = loadPerDay;
    for (let i = 0; i < weights.length; i++) {
      const nowWeights = weights[i];
      if (nowWeights > loadPerDay) return "up";
      currentLoad -= nowWeights;
      if (currentLoad < 0) {
        currentDays += 1;
        currentLoad = loadPerDay - nowWeights;
        if (currentDays > days) return "up";
      }
    }
    return "down";
  };

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (getShippingDays(mid) === "down") {
      res = Math.min(res, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유
parametric search

2. 시간 복잡도 or 결과
O(nlogn)

// Runtime
// 74 ms
// Beats
// 94.98%
// Memory
// 45.8 MB
// Beats
// 89.95%

3. 기타 의견 

4. 참고 링크

*/
