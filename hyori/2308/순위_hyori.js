/**
 * @param {number} n 선수의 수, 1~100
 * @param {number[][]} results 경기결과, [a, b] === a가 b를 이김
 * @returns {number} 정확하게 순위를 매길 수 있는 선수의 수
 */
const solution = (n, results) => {
  // 각 결과에 대해 2차원 배열에 표기
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false))
  results.map((val) => {
    const [win, lose] = val
    graph[win][lose] = 1
    graph[lose][win] = -1
    graph[win][win] = 0
    graph[lose][lose] = 0
  })

  const rangeN = [...Array(n).keys()].map((e) => e + 1)

  // 플로이드 와샬 알고리즘 적용
  for (const mid of rangeN) {
    for (const a of rangeN) {
      for (const b of rangeN) {
        // a가 mid를 이기고, mid가 b를 이기면 a가 b를 이김
        if (graph[a][mid] === 1 && graph[mid][b] === 1) graph[a][b] = 1
        // a가 mid에게 지고, mid가 b에게 지면 a가 b에게 짐
        if (graph[a][mid] === -1 && graph[mid][b] === -1) graph[a][b] = -1
      }
    }
  }

  // 경기결과를 추측할 수 없는 경우는 false로 그대로 남아있음
  // 각 선수에 대해 false가 전혀 없는 경우만 ans + 1
  let ans = 0
  for (const self of rangeN) {
    let hasFalse = false
    for (const other of rangeN) {
      if (graph[self][other] === false) {
        hasFalse = true
        break
      }
    }
    ans += hasFalse ? 0 : 1
  }

  return ans
}

/*
1. 알고리즘 or 자료구조 선택 이유
플로이드 워셜

2. 시간 복잡도 or 결과


3. 기타 의견
중대발표를 하겠습니다 ..

4. 참고 링크
*/
