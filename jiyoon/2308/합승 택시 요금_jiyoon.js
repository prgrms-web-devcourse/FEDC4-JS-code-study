function solution(n, s, a, b, fares) {
  // dp 배열
  const dist = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  // 자기 자신에 대한 최단경로는 0으로 설정
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  // 주어진 연결 정보로 dp 배열 초기화
  fares.forEach((pos) => {
    const [x, y, weight] = pos;
    // x에서 y로 향하는 최단경로 = weight
    dist[x - 1][y - 1] = weight;
    dist[y - 1][x - 1] = weight;
  });
  console.log(dist);

  // k는 경유노드, i는 시작노드, j는 도착노드
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // 1. 두 사람이 따로 가는 경우
  let answer = dist[s - 1][a - 1] + dist[s - 1][b - 1];

  // 2. 같이 갔다가 나눠지는 경우
  // 시작점에서 합승지점까지 + 합승지점에서 a까지 + 합승지점에서 b까지
  for (let i = 0; i < n; i++) {
    const shortest = dist[s - 1][i] + dist[i][a - 1] + dist[i][b - 1];

    // 기존 값과 새로 계산된 값 중 더 작은값으로 갱신
    answer = Math.min(answer, shortest);
  }
  return answer;
}
/*
1. 알고리즘 or 자료구조 선택 이유
플로이드 와샬

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (3.42ms, 33.6MB)
테스트 2 〉	통과 (3.69ms, 33.7MB)
테스트 3 〉	통과 (3.34ms, 33.6MB)
테스트 4 〉	통과 (4.43ms, 33.8MB)
테스트 5 〉	통과 (4.44ms, 33.8MB)
테스트 6 〉	통과 (4.64ms, 33.9MB)
테스트 7 〉	통과 (4.31ms, 33.8MB)
테스트 8 〉	통과 (5.16ms, 34.1MB)
테스트 9 〉	통과 (5.08ms, 34.2MB)
테스트 10 〉	통과 (5.46ms, 34.3MB)
효율성  테스트
테스트 1 〉	통과 (32.35ms, 40.9MB)
테스트 2 〉	통과 (49.45ms, 41.9MB)
테스트 3 〉	통과 (56.92ms, 42.2MB)
테스트 4 〉	통과 (57.00ms, 41.9MB)
테스트 5 〉	통과 (64.31ms, 42.5MB)
테스트 6 〉	통과 (56.47ms, 41.8MB)
테스트 7 〉	통과 (67.42ms, 46.8MB)
테스트 8 〉	통과 (63.46ms, 46.1MB)
테스트 9 〉	통과 (82.88ms, 46.4MB)
테스트 10 〉	통과 (64.01ms, 46MB)
테스트 11 〉	통과 (64.87ms, 46.6MB)
테스트 12 〉	통과 (64.38ms, 44.3MB)
테스트 13 〉	통과 (63.35ms, 44.2MB)
테스트 14 〉	통과 (64.99ms, 44MB)
테스트 15 〉	통과 (63.39ms, 44MB)
테스트 16 〉	통과 (55.82ms, 41.5MB)
테스트 17 〉	통과 (63.25ms, 42MB)
테스트 18 〉	통과 (55.59ms, 41.5MB)
테스트 19 〉	통과 (56.74ms, 41.6MB)
테스트 20 〉	통과 (57.39ms, 42.1MB)
테스트 21 〉	통과 (57.23ms, 41.8MB)
테스트 22 〉	통과 (71.76ms, 44.3MB)
테스트 23 〉	통과 (70.22ms, 44.4MB)
테스트 24 〉	통과 (65.21ms, 44.5MB)
테스트 25 〉	통과 (56.71ms, 42MB)
테스트 26 〉	통과 (60.59ms, 41.8MB)
테스트 27 〉	통과 (58.61ms, 42.1MB)
테스트 28 〉	통과 (123.33ms, 41.3MB)
테스트 29 〉	통과 (31.12ms, 40.6MB)
테스트 30 〉	통과 (31.09ms, 41MB)

3. 기타 의견
문제와 해설을 참고하면서 어떻게 풀어야하는지 감을 익혔습니다.

4. 참고 링크
https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%ED%95%A9%EC%8A%B9-%ED%83%9D%EC%8B%9C-%EC%9A%94%EA%B8%88-JS

*/
