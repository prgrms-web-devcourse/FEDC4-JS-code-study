function solution(N, number) {
  let result = -1;
  let dp = Array.from({ length: 8 }, (_, i) => {
    let res = "";
    for (let j = 0; j < i + 1; j++) res += N + "";
    if (number === +res) result = i + 1;
    return [+res];
  });
  if (result !== -1) return result;

  let time = 1;
  while (time < 8) {
    for (let i = 0; i < time; i++) {
      let j = time - i - 1;
      dp[i].forEach((v1) => {
        dp[j].forEach((v2) => {
          dp[time].push(v1 + v2);
          dp[time].push(v1 - v2);
          dp[time].push(parseInt(v1 / v2));
          dp[time].push(v1 * v2);
        });
      });
    }

    if (dp[time].includes(number)) {
      return time + 1;
    } else {
      time++;
    }
  }

  return result;
}

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (7.09ms, 39.3MB)
테스트 2 〉	통과 (0.18ms, 33.6MB)
테스트 3 〉	통과 (0.27ms, 33.5MB)
테스트 4 〉	통과 (722.64ms, 263MB)
테스트 5 〉	통과 (688.63ms, 264MB)
테스트 6 〉	통과 (1.06ms, 33.9MB)
테스트 7 〉	통과 (1.04ms, 33.8MB)
테스트 8 〉	통과 (707.99ms, 264MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)

3. 기타 의견 

4. 참고 링크

*/
