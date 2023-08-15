function solution(n, results) {
  let answer = 0;
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  // 이긴 선수를 true로 설정
  for (const res of results) {
    dp[res[0] - 1][res[1] - 1] = true;
  }

  // 플로이드 와샬
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 노드 i -> k, k -> j 로의 값이 있다면
        if (dp[i][k] && dp[k][j]) {
          // 값이 있다는 것은 i -> j 승리할 수 있다
          dp[i][j] = true;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      // 승리 or 패배 여부가 기록되어 있다면
      if (dp[i][j] || dp[j][i]) {
        cnt++;
      }
    }
    // 순위 판별 조건 만족 시 선수인원 증가
    if (cnt === n - 1) answer++;
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
최단 거리를 구하지 않는 플로이드 와샬

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.26ms, 33.4MB)
테스트 2 〉	통과 (0.26ms, 32.9MB)
테스트 3 〉	통과 (0.29ms, 32.9MB)
테스트 4 〉	통과 (0.46ms, 33.5MB)
테스트 5 〉	통과 (23.67ms, 36.3MB)
테스트 6 〉	통과 (29.56ms, 36.6MB)
테스트 7 〉	통과 (36.72ms, 36.9MB)
테스트 8 〉	통과 (31.68ms, 37.4MB)
테스트 9 〉	통과 (29.97ms, 36.9MB)
테스트 10 〉	통과 (9.90ms, 37.3MB)

3. 기타 의견
플로이드와샬을 이런식으로도 떠올릴 수 있구나 배웠습니다..!

런타임 오류
for(let i = 0; i < n; i++){
    const player = results[i];
    dp[player[0]-1][player[1]-1] = true;
}
이긴 선수 처리 해주는 부분에서 이렇게 처리해주면
런타임 오류랑 오류가 발생하더라구요..?

4. 참고 링크
친절한 설명
https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%88%9C%EC%9C%84-JS

*/
