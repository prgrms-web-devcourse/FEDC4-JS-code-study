/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
  // 최소 비용을 저장하기 위해 무한대로 초기화
  let dist = Array(n).fill(Infinity);
  // 출발지 까지의 비용을 0으로 설정
  dist[src] = 0;

  // 최대 경유 횟수내
  for (let i = 0; i < k + 1; i++) {
    const temp = [...dist];
    // [출발지, 도착지, 가격]
    for ([s, d, p] of flights) {
      // 아직 방문하지 않았으면(Infinity) 다음 항공편 검사
      if (dist[s] === Infinity) continue;
      // 출발지부터 도착지까지의 비용이 현재 temp[d]보다 작으면
      if (dist[s] + p < temp[d]) {
        // 도착지의 비용 갱신
        temp[d] = dist[s] + p;
      }
    }
    // 현재 경유 횟수에서 도시별 최소 비용을 업데이트
    dist = [...temp];
  }
  // 해당 도시에 도달할 수 없다면(Infinty) -1반환
  return dist[dst] === Infinity ? -1 : dist[dst];
};
/*
1. 알고리즘 or 자료구조 선택 이유
다익스트라

2. 시간 복잡도 or 결과
Runtime - 81ms 81.78%
Memory - 47.89MB 56.89%

3. 기타 의견
문제와 해설을 참고하면서 어떻게 풀어야하는지 감을 익혔습니다.

4. 참고 링크
https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3102060/djikstra-algorithm-js/

*/
