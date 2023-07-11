function solution(N, number) {
  const res = [];
  const dp = Array.from({ length: 9 }, () => new Set());
  dp[1].add(N);
  if (number === N) return 1;

  for (let i = 1; i <= 8; i++) {
    let temp = "";
    for (let j = i; j > 0; j--) {
      temp += N;
    }
    if (parseInt(temp) === number) return i;
    dp[i].add(parseInt(temp));
  }

  for (let i = 1; i < 8; i++) {
    for (let j = i; j > 0; j--) {
      if (i + j > 8) continue;
      Array.from(dp[i]).forEach((v1) => {
        Array.from(dp[j]).forEach((v2) => {
          dp[i + j].add(v1 + v2);
          dp[i + j].add(v2 + v1);
          dp[i + j].add(v1 - v2);
          dp[i + j].add(v2 - v1);
          dp[i + j].add(parseInt(v1 / v2));
          dp[i + j].add(parseInt(v2 / v1));
          dp[i + j].add(v1 * v2);
          dp[i + j].add(v2 * v1);
        });
      });
      if (Array.from(dp[i + j]).includes(number)) res.push(i + j);
    }
  }

  if (res.length) {
    return Math.min(...res);
  }

  return -1;
}

/*
1. 알고리즘 or 자료구조 선택 이유
변수명만 dp... 
fail을 수차례 반복하며 케이스를 갖다붙여서 이상하게 풀었습니다... 설명하기에도 민망한 느낌쓰

2. 시간 복잡도 or 결과


테스트 1 〉	통과 (15.09ms, 41.1MB)
테스트 2 〉	통과 (0.12ms, 33.4MB)
테스트 3 〉	통과 (7.14ms, 38.8MB)
테스트 4 〉	통과 (15.62ms, 41.1MB)
테스트 5 〉	통과 (12.42ms, 39MB)
테스트 6 〉	통과 (11.65ms, 39.5MB)
테스트 7 〉	통과 (13.59ms, 40.3MB)
테스트 8 〉	통과 (15.85ms, 40.8MB)
테스트 9 〉	통과 (0.12ms, 33.4MB)

3. 기타 의견 

4. 참고 링크

*/
