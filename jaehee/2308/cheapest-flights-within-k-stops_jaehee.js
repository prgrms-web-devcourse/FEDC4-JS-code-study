/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const maps = Array.from({ length: n + 1 }, () => []);
  const results = Array.from({ length: n + 1 }, () => Infinity);

  flights.forEach(([from, to, cost]) => {
    maps[from].push([to, cost]);
  });

  const q = [[src, 0, 0]];
  while (q.length) {
    const [current, currentCost, time] = q.shift();
    if (time > k) continue;
    maps[current].forEach(([to, cost]) => {
      if (results[to] >= currentCost + cost) {
        results[to] = currentCost + cost;
        q.push([to, cost + currentCost, time + 1]);
      }
    });
  }

  return results[dst] === Infinity ? -1 : results[dst];
};

/*
1. 알고리즘 or 자료구조 선택 이유
이게 다익스트라가 맞나싶네요... 제가 자바스크립트로 다익스트라를 구현한 적이 없기도 하고 오랜만이라ㅋㅋ..

2. 시간 복잡도 or 결과
O(n)

Runtime
68 ms
Beats
96.44%
Memory
46.4 MB
Beats
83.11%

3. 기타 의견 

4. 참고 링크

*/
