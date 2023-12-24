const firstMove = {
  1: 1,
  2: 3,
  3: 2,
};

const secondMove = {
  1: 2,
  2: 1,
  3: 3,
};

function solution(n) {
  const dp = [
    [[1, 3]],
    [
      [1, 2],
      [1, 3],
      [2, 3],
    ],
  ];

  if (n === 1) return dp[0];
  if (n === 2) return dp[1];

  for (let i = 2; i < n; i++) {
    const ans = [];
    const last = dp[i - 1];

    last.forEach(([from, to]) => {
      ans.push([firstMove[from], firstMove[to]]);
    });

    ans.push([1, 3]);

    last.forEach(([from, to]) => {
      ans.push([secondMove[from], secondMove[to]]);
    });
    dp.push(ans);
  }

  return dp[n - 1];
}

/*
1. 알고리즘 or 자료구조 선택 이유
DP?
이전 결과를 토대로 다음 결과를 만들어내는 방식이라서

2. 시간 복잡도 or 결과

테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
테스트 3 〉	통과 (0.32ms, 33.4MB)
테스트 4 〉	통과 (0.26ms, 33.5MB)
테스트 5 〉	통과 (0.36ms, 33.6MB)
테스트 6 〉	통과 (0.42ms, 33.8MB)
테스트 7 〉	통과 (0.60ms, 34MB)
테스트 8 〉	통과 (0.96ms, 38.1MB)
테스트 9 〉	통과 (1.76ms, 38.4MB)
테스트 10 〉	통과 (5.35ms, 39.9MB)
테스트 11 〉	통과 (7.56ms, 41.8MB)
테스트 12 〉	통과 (13.94ms, 45.8MB)
테스트 13 〉	통과 (15.97ms, 54.6MB)

3. 기타 의견 

4. 참고 링크

*/
