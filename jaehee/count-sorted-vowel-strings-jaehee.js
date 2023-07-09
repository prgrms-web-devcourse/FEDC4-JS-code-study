/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = [1, 1, 1, 1, 1];

  for (let j = 1; j < n; j++) {
    const new_dp = [0, 0, 0, 0, 0];
    const last_dp = dp[j - 1];
    last_dp.forEach((v, idx) => {
      for (let m = 4; m >= idx; m--) {
        new_dp[m] += v;
      }
    });
    dp[j] = new_dp;
  }

  return dp[n - 1].reduce((acc, cur) => acc + cur);
};

/*
1. 알고리즘 or 자료구조 선택 이유
특별한 내용은 없고 이전 결과를 활용해 특정 알파벳으로 끝나는 단어의 개수를 저장해두고 활용하는 방식으로 풀었습니다.

2. 시간 복잡도 or 결과

Runtime
56 ms
Beats
69.37%
Memory
41.8 MB
Beats
58.4%

3. 기타 의견 

4. 참고 링크

*/
