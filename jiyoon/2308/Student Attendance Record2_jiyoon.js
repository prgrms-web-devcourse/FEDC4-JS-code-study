/**
 * @param {number} n
 * @return {number}
 */
const checkRecord = function (n) {
  let dp = [1, 1, 0, 1, 0, 0]; // init table for n = 1
  for (let i = 2; i <= n; i++) {
    // updating table for n = i
    dp = [sum(dp, 0, 2), dp[0], dp[1], sum(dp, 0, 5), dp[3], dp[4]];
  }
  return sum(dp, 0, 5);
};

function sum(arr, l, h) {
  let s = 0;
  for (let i = l; i <= h; i++) {
    s = (s + arr[i]) % 1000000007;
  }
  return s;
}

/*
A는 최대 1개(0,1), L연속 최대 2개(0,1,2) -> 가능 한 조합 6개
A를 n개 포함하고 L이 n개로 끝나는 AnLn
n = 1
A0L0: P
A0L1: L
A0L2:
A1L0: A
A1L1:
A1L2:
Done:

n = 2
A0L0: PP, LP
A0L1: PL
A0L2: LL
A1L0: AP, PA, LA
A1L1: AL,
A1L2:
Done: AA

...

 */

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
Runtime - 106ms 93.33%
Memory - 48.47mb 86.67%
3. 기타 의견

4. 참고 링크
https://leetcode.com/problems/student-attendance-record-ii/solutions/101652/java-4-lines-dp-solution-with-state-transition-table-explained/
이게 좀 더 쉬운 것 같은데 이번엔 표를 이해 못 하겠어요.. ㅋㅋㅋ

*/
