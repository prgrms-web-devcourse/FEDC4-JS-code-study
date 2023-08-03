/**
 * @param {number} n
 * @return {number}
 */
const checkRecord = function (n) {
  const m = 1000000007;
  const P = Array(n).fill(0);
  const L = Array(n).fill(0);
  const A = Array(n).fill(0);

  P[0] = 1;
  L[0] = 1;
  L[1] = 3;
  A[0] = 1;
  A[1] = 2;
  A[2] = 4;

  if (n === 1) {
    return 3;
  }

  for (let i = 1; i < n; i++) {
    A[i - 1] %= m;
    P[i - 1] %= m;
    L[i - 1] %= m;
    P[i] = ((A[i - 1] + P[i - 1]) % m) + L[i - 1];
    if (i > 1) L[i] = (((A[i - 1] + P[i - 1]) % m) + ((A[i - 2] + P[i - 2]) % m)) % m;
    if (i > 2) A[i] = (((A[i - 1] + A[i - 2]) % m) + A[i - 3]) % m;
  }
  return ((((A[n - 1] % m) + (P[n - 1] % m)) % m) + (L[n - 1] % m)) % m;
};

/*
1. 알고리즘 or 자료구조 선택 이유
포기했습니다.. 참고링크를 읽어도 왜 이딴 식으로 푸는지..

2. 참고링크(지윤님이 저번에 남겨주신 링크입니다)
https://leetcode.com/problems/student-attendance-record-ii/solutions/101643/share-my-o-n-c-dp-solution-with-thinking-process-and-explanation/
*/
