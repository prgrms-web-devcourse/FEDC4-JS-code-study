/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start_node, end_node) {
  const probs = Array.from({ length: n }, () => 0);
  const maps = Array.from({ length: n }, () => []);

  edges.forEach(([start, end], idx) => {
    maps[start].push([end, succProb[idx]]);
    maps[end].push([start, succProb[idx]]);
  });

  const q = [];
  q.push([start_node, 1]);

  while (q.length) {
    const [now, prob] = q.shift();

    maps[now].forEach(([next, nextProb]) => {
      if (probs[next] < prob * nextProb) {
        probs[next] = prob * nextProb;
        q.push([next, probs[next]]);
      }
    });
  }

  return probs[end_node];
};

/*
1. 알고리즘 or 자료구조 선택 이유
다익스트라 식의 값 갱신

2. 시간 복잡도 or 결과

Runtime
220 ms
Beats
86.43%
Memory
93.8 MB
Beats
43.51%

3. 기타 의견 
이 문제에서 좀 헤매니까 일반 BFS와 차이를 조금 알 것 같아요.

4. 참고 링크

*/
