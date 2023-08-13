/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
  const cost = Array(n).fill(Infinity)
  let prevCost = Array(n).fill(Infinity)
  cost[src] = 0
  prevCost[src] = 0

  for (let stop = 0; stop < k + 1; stop++) {
    let changes = 0

    for (const [from, to, price] of flights) {
      const altCost = price + prevCost[from]
      if (price + prevCost[from] < cost[to]) {
        cost[to] = altCost
        changes++
      }
    }
    if (changes === 0) break
    prevCost = [...cost]
  }
  return cost[dst] === Infinity ? -1 : cost[dst]
}

/*
1. 알고리즘 or 자료구조 선택 이유
다익스트라 알고리즘?

2. 시간 복잡도 or 결과
runtime: 50 ms / beats 100.00%
memory: 45.62 mb / beats 90.27%

3. 기타 의견
처음에 bfs로 풀었다가 혼쭐이 나서 답을 참고했습니다. (물론 bfs도 조금 참고 했음 ...)

k, 즉 거칠 수 있는 최대 개수만큼 반복해서 답을 갱신해 줍니다.
초반에 Infinity로 채워져 있는 배열의 src(출발 지점 인덱스) 번째를 0으로 초기화해주면,
반복문이 끝나고 나면 dst번째 요소의 값은 src - dst 까지의 최소 비용이 저장됩니다.

방향이 없고, 조건이 없으면 일차원 배열로 만들어서 푸는 게 가능한 것 같습니다!

4. 참고 링크
*/
