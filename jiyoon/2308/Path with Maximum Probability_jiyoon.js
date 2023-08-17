/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
const maxProbability = function (n, edges, succProb, start_node, end_node) {
  const dist = new Array(n).fill(-Infinity);

  // 그래프에는 노드에 연결되어 있는 정보들
  const graph = Array.from({ length: n }, () => []);
  // 큐에는 노드 정보
  const queue = [];

  // 그래프 정리
  for (let i = 0; i < edges.length; i++) {
    const [start, end] = edges[i];
    const p = succProb[i];
    graph[end].push([start, p]);
    graph[start].push([end, p]);
  }
  /*graph: [
      [ [ 1, 0.5 ], [ 2, 0.2 ] ],
      [ [ 0, 0.5 ], [ 2, 0.5 ] ],
      [ [ 1, 0.5 ], [ 0, 0.2 ] ]
    ] */

  // start 시작이고, 확률은 1
  queue.push([start_node, 1]);
  dist[start_node] = 1;
  // [ 1, -Infinity, -Infinity ]

  while (queue.length) {
    const [current_node, p] = queue.shift();

    // 현재 노드에서 갈 수 있는 노드들을 순회
    for (let i = 0; i < graph[current_node].length; i++) {
      const [next_node, nextP] = graph[current_node][i];
      // 갈 수 있는 확률 = 현재 확률 * 다음 노드의 확률
      const nextProb = p * nextP;
      // 새로 계산된 확률이 현재 기록된 확률보다 크면 갱신
      if (dist[next_node] < nextProb) {
        dist[next_node] = nextProb;
        // 큐에 다음 노드와 해당 노드까지의 최대 확률 정보를 추가
        // 다음 노드도 탐색 대상
        queue.push([next_node, nextProb]);
      }
    }
  }
  return dist[end_node] === -Infinity ? 0 : dist[end_node];
};

/*
1. 알고리즘 or 자료구조 선택 이유
다익스트라 - 확률 최댓값 구하기

2. 시간 복잡도 or 결과
Runtime - 234ms 84.46%
Memory - 89.2MB 78.77%

3. 기타 의견
이번에는 큐로 푼 문제를 참고해서 공부했습니다.
그래프로 정리하는거 까지는 완벽히 이해했어요!
요구조건에 따라서
큐로 구현하거나 힙을 구현하는 걸 공부하면 될 것 같습니다..ㅠ


4. 참고 링크
https://eunchanee.tistory.com/667

*/
