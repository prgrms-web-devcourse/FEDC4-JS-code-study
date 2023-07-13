// 2023.07.13 15:23~16:12
/**
 * @param {number} n
 * @return {number}
 */
const checkRecord = function (n) {
  // A는 1개, L이 3개 연속 올 수 없음
  const m = 1000000007;
  // P, L, A은 길이가 n인 P,L,A로 끝나는 가능한 모든 출석 기록의 총 수
  const P = Array(n).fill(0);
  const L = Array(n).fill(0);
  const A = Array(n).fill(0);

  /* P(n)계산: 길이가 n-1인 출석 기록에 P를 추가하면 길이가 n인 P로 끝나는 출석 기록을 얻게 됨
  1. n-1 번쨰 문자가 P인 경우 P추가 가능 -> PP
  2. n-1 번쨰 문자가 A인 경우 P추가 가능 -> PP
  3. n-1 번쨰 문자가 L인 경우 P추가 가능 -> PP
  P(n) = A(n - 1) + P(n - 1) + L(n - 1), n ​​≥ 2.
  A(1) = P(1) = L(1) = 1.
  */

  /* L(n)계산: 길이가 n-1인 출석 기록에 L를 추가하면 길이가 n인 L로 끝나는 출석 기록을 얻게 됨
  1. n-1 번쨰 문자가 P인 경우 L추가 가능 -> PL
  2. n-1 번쨰 문자가 A인 경우 L추가 가능 -> AL
  3. n-1 번쨰 문자가 L인 경우 
    3-1. n-2 번째 문자가 A인 경우 L추가 가능 -> 모두 가능
    3-2. n-2 번째 문자가 P인 경우 L추가 가능 -> PL
    3-3. n-2 번째 문자가 L인 경우 L추가 X -> LLL(X)
  L(n) = A(n - 1) + P(n - 1) + A(n - 2) + P(n - 2), n ≥ 3
  A(1) = P(1) = L(1) = 1.
  A(2) = 2, P(2) = 3
  L(1) = 1, L(2) = 3
  */

  /* A(n)계산: 길이가 n-1인 출석 기록에 A를 추가하면 길이가 n인 A로 끝나는 출석 기록을 얻게 됨
  1. n-1 번쨰 문자가 P이고 A가 없는 경우 -> A추가 가능
  2. n-1 번쨰 문자가 A인 경우 A 추가 X -> AA(X)
  3. n-1 번쨰 문자가 L이고 A가 없는 경우 -> A추가 가능
  A(n) = noAP(n - 1) + noAL(n - 1), n ​​≥ 2.
  A(1) = 1
  noAP(1) = noAL(1) = 1
  ... 이런식으로 계산
  */

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
dp, 점화식 사용

2. 시간 복잡도 or 결과
O(n)
Runtime - 153ms 75%
Memory - 58.7MB 66.67%

3. 기타 의견
js로 제대로 설명된 풀이가 없어서 c코드를 참고해서 풀었습니다.
한글 번역으로 돌려서 읽어보시면 대충 먼 느낌인지는 감이 옵니다..!
일단 제출하고 좀 더 공부해야겠습니다.

4. 참고 링크
https://leetcode.com/problems/student-attendance-record-ii/solutions/101643/share-my-o-n-c-dp-solution-with-thinking-process-and-explanation/
*/
