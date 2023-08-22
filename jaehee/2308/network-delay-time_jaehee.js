/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  if (n === 1) return 0;
  const res = Array.from({ length: n + 1 }, () => Infinity);
  const maps = Array.from({ length: n + 1 }, () => []);

  times.forEach(([from, to, cost]) => {
    maps[from].push([to, cost]);
  });

  res[k] = 0;
  const q = [[k, 0]];

  while (q.length) {
    const [now, costSum] = q.shift();

    maps[now].forEach(([to, cost]) => {
      if (res[to] > costSum + cost) {
        res[to] = costSum + cost;
        q.push([to, res[to]]);
      }
    });
  }

  const answer = Math.max(...res.slice(1).filter((v) => v !== 0));

  return answer === Infinity ? -1 : answer;
};

// 15m

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과

Runtime
87 ms
Beats
95.54%
Memory
50.3 MB
Beats
79.72%

3. 기타 의견 

4. 참고 링크

*/
