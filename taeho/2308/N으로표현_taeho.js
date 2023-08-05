function solution(N, number) {
  const dp = Array.from({ length: 9 }, () => new Set());

  dp.forEach((v, i) => {
    v.add(Number(N.toString().repeat(i)));
  });

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < i; j++) {
      for (const first of dp[j]) {
        for (const last of dp[i - j]) {
          dp[i].add(first + last);
          dp[i].add(first - last);
          dp[i].add(first * last);
          dp[i].add(Math.floor(first / last));
        }
      }
    }
    if (dp[i].has(number)) return i;
  }

  return -1;
}

/*
1. 알고리즘 or 자료구조 선택 이유
풀었던 기억이 나서 이전 답과 크게 달라진게 없네요..

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (1.03ms, 33.8MB)
테스트 2 〉	통과 (0.20ms, 33.4MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (20.10ms, 39.6MB)
테스트 5 〉	통과 (11.19ms, 38.1MB)
테스트 6 〉	통과 (0.38ms, 33.5MB)
테스트 7 〉	통과 (0.39ms, 33.5MB)
테스트 8 〉	통과 (20.25ms, 39.8MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
*/
