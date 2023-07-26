// 2023.07.24 15:25~15:52
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  const totalWeight = weights.reduce((acc, cur) => acc + cur);
  const maxWeight = Math.max(...weights);

  let max = maxWeight; // 유사 left
  let limitSumWeights = totalWeight; // 유사 right

  while (max < limitSumWeights) {
    let capacityWeights = Math.floor((max + limitSumWeights) / 2); // 수용 무게
    let accWeights = 0; // 누적 무게
    let countDays = 1;
    for (let i = 0; i < weights.length; i++) {
      accWeights += weights[i];
      if (accWeights > capacityWeights) {
        countDays++;
        accWeights = weights[i];
      }
    }
    if (countDays > days) {
      max = capacityWeights + 1;
    } else {
      limitSumWeights = capacityWeights;
    }
  }
  return limitSumWeights;
};
/*
1. 알고리즘 or 자료구조 선택 이유
이진 탐색

2. 시간 복잡도 or 결과
O(nlogm)
Runtime - 82ms 86.29%
Memory - 26.08MB 77.67%

3. 기타 의견
감을 잡기 위해서..
첫 문제부터 빠르게 참고했습니다

4. 참고 링크
https://pro-train.tistory.com/149

*/
