function solution(n, s, a, b, fares) {
  const costs = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => Infinity)
  );

  fares.forEach(([from, to, cost]) => {
    costs[from][to] = cost;
    costs[to][from] = cost;
  });

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (costs[i][j] > costs[i][k] + costs[k][j]) {
          costs[i][j] = costs[i][k] + costs[k][j];
        }
        if (i === j) costs[i][j] = 0;
      }
    }
  }

  let answer = costs[s][a] + costs[s][b];

  for (let i = 1; i < n + 1; i++) {
    if (answer > costs[s][i] + costs[i][a] + costs[i][b]) {
      answer = costs[s][i] + costs[i][a] + costs[i][b];
    }
  }
  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
플로이드 워셜로 전체를 구한 후 각 노드 별 최솟값을 구했습니다.

2. 시간 복잡도 or 결과
O(n^3)

정확성  테스트
테스트 1 〉	통과 (0.32ms, 33.5MB)
테스트 2 〉	통과 (0.32ms, 33.5MB)
테스트 3 〉	통과 (0.30ms, 33.5MB)
테스트 4 〉	통과 (0.48ms, 33.6MB)
테스트 5 〉	통과 (0.55ms, 33.6MB)
테스트 6 〉	통과 (0.68ms, 33.6MB)
테스트 7 〉	통과 (0.58ms, 33.6MB)
테스트 8 〉	통과 (0.90ms, 33.8MB)
테스트 9 〉	통과 (1.06ms, 33.7MB)
테스트 10 〉	통과 (1.32ms, 33.9MB)
효율성  테스트
테스트 1 〉	통과 (12.89ms, 37.7MB)
테스트 2 〉	통과 (49.73ms, 38.1MB)
테스트 3 〉	통과 (46.73ms, 38.3MB)
테스트 4 〉	통과 (73.16ms, 37.7MB)
테스트 5 〉	통과 (48.26ms, 38.1MB)
테스트 6 〉	통과 (51.18ms, 38.2MB)
테스트 7 〉	통과 (51.90ms, 44MB)
테스트 8 〉	통과 (61.60ms, 44.4MB)
테스트 9 〉	통과 (50.77ms, 45.1MB)
테스트 10 〉	통과 (50.46ms, 44.9MB)
테스트 11 〉	통과 (48.35ms, 44.1MB)
테스트 12 〉	통과 (52.38ms, 41.7MB)
테스트 13 〉	통과 (54.40ms, 41.6MB)
테스트 14 〉	통과 (50.69ms, 40.8MB)
테스트 15 〉	통과 (51.06ms, 41MB)
테스트 16 〉	통과 (45.65ms, 38.1MB)
테스트 17 〉	통과 (51.75ms, 38.2MB)
테스트 18 〉	통과 (49.16ms, 38.1MB)
테스트 19 〉	통과 (52.42ms, 38.4MB)
테스트 20 〉	통과 (49.07ms, 38.7MB)
테스트 21 〉	통과 (48.15ms, 38.7MB)
테스트 22 〉	통과 (57.75ms, 41.7MB)
테스트 23 〉	통과 (52.44ms, 41.5MB)
테스트 24 〉	통과 (52.26ms, 41.4MB)
테스트 25 〉	통과 (49.85ms, 38.1MB)
테스트 26 〉	통과 (47.39ms, 38.2MB)
테스트 27 〉	통과 (49.31ms, 38.7MB)
테스트 28 〉	통과 (48.41ms, 38.7MB)
테스트 29 〉	통과 (11.16ms, 37.7MB)
테스트 30 〉	통과 (11.16ms, 37.6MB)

3. 기타 의견 

4. 참고 링크

*/
