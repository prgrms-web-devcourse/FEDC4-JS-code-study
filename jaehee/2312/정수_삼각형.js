function solution(triangle) {
  const dp = Array.from({ length: triangle.length }, (_, i) =>
    Array.from({ length: i + 1 }, () => 0)
  );
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j];
      } else if (j === i) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
      }
    }
  }

  return Math.max(...dp[triangle.length - 1]);
}

/*
1. 알고리즘 or 자료구조 선택 이유
DP

처음에 DFS로 풀었다가 시간 초과 떴다.
그래서 DP로 바꿔서 통과

2. 시간 복잡도 or 결과

정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.4MB)
테스트 3 〉	통과 (0.23ms, 33.5MB)
테스트 4 〉	통과 (0.39ms, 33.6MB)
테스트 5 〉	통과 (0.90ms, 33.5MB)
테스트 6 〉	통과 (0.44ms, 33.5MB)
테스트 7 〉	통과 (0.97ms, 33.6MB)
테스트 8 〉	통과 (0.41ms, 33.5MB)
테스트 9 〉	통과 (0.20ms, 33.4MB)
테스트 10 〉	통과 (0.30ms, 33.5MB)

효율성  테스트
테스트 1 〉	통과 (11.39ms, 41.2MB)
테스트 2 〉	통과 (9.92ms, 40.1MB)
테스트 3 〉	통과 (12.62ms, 41.9MB)
테스트 4 〉	통과 (11.20ms, 41.3MB)
테스트 5 〉	통과 (10.97ms, 40.9MB)
테스트 6 〉	통과 (13.26ms, 39.4MB)
테스트 7 〉	통과 (11.73ms, 41.6MB)
테스트 8 〉	통과 (10.67ms, 40.6MB)
테스트 9 〉	통과 (11.05ms, 40.9MB)
테스트 10 〉	통과 (13.59ms, 41.8MB)

3. 기타 의견 

4. 참고 링크

*/
