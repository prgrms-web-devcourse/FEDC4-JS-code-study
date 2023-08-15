/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */

const maxProbability = function (n, edges, succProb, start, end) {
  const MIN = Number.MIN_SAFE_INTEGER
  const m = edges.length

  const adjList = {}
  const dists = new Array(n).fill(MIN)

  for (let i = 0; i < n; i++) {
    adjList[i] = []
  }

  for (let i = 0; i < m; i++) {
    const [u, v] = edges[i]
    const weight = succProb[i]

    adjList[u].push([v, weight])
    adjList[v].push([u, weight])
  }

  const maxHeap = new MaxPriorityQueue({ priority: (x) => x[1] })

  maxHeap.enqueue([start, 1])

  while (!maxHeap.isEmpty()) {
    const [node, prob] = maxHeap.dequeue().element

    if (node === end) return prob
    if (dists[node] > prob) continue

    for (const [nei, weight] of adjList[node]) {
      if (prob * weight > dists[nei]) {
        dists[nei] = prob * weight
        maxHeap.enqueue([nei, dists[nei]])
      }
    }
  }

  return 0
}

/*
1. 알고리즘 or 자료구조 선택 이유
다익스트라

2. 시간 복잡도 or 결과


3. 기타 의견
중대발표를 하겠습니다 ..

4. 참고 링크
*/
