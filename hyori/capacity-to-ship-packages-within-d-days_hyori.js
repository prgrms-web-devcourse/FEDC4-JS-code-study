/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

// 다른 답을 참고했습니다.
const shipWithinDays = function (weights, days) {
  let maxCapacity = 0
  let minCapacity = 0

  for (const weight of weights) {
    maxCapacity += weight
    minCapacity = Math.max(minCapacity, weight)
  }

  while (minCapacity < maxCapacity) {
    const capacity = Math.floor((maxCapacity + minCapacity) / 2)
    let currentDays = 1 // 현재까지 걸린 일수
    let currentLoad = 0 // 현재까지 배에 적재한 무게
    for (const weight of weights) {
      currentLoad += weight
      if (currentLoad > capacity) {
        // 현재까지 적재한 무게가 용량을 초과하면 배를 출발시킴
        currentDays++ // 배를 출발시켰으므로 일 수를 증가시킴
        currentLoad = weight // 출발한 이후부터 적재한 무게를 현재 무게로 초기화
      }
    }

    // 구한 일 수가 기간보다 크면, 용량(capacity)가 작아서 배가 모든 물품을 정해진 기간 내에 옮길 수 없는 상태
    if (currentDays > days)
      minCapacity =
        capacity + 1 // 최소 적재 용량을 용량보다 한 단계 큰 값으로 조정
    else maxCapacity = capacity
  }

  return minCapacity
}

/*
1. 알고리즘 or 자료구조 선택 이유
이분탐색

2. 시간 복잡도 or 결과
runtime: 86 ms / beats 72.59%
memory: 46.18 mb / beats 72.08%

3. 기타 의견
못 풀었습니다.
이분탐색 개념을 응용하려니까 너무 어렵네요ㅠ
이 문제는 기본 문제 중 하나일 텐데, 저한테는 너무너무 어려웠습니다.
좀 더 쉬운 문제들을 많이 풀어봐야겠어요.

4. 참고 링크
*/
