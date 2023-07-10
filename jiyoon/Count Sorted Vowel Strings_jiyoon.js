// 2023.07.09 13:20~14:32
/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  const dp = []; // [ <1 empty item>, [ 1, 1, 1, 1, 1 ] ]

  dp[1] = [1, 1, 1, 1, 1];
  if (n === 1) {
    return 5;
  }
  // dp[2] = [5,4,3,2,1];
  //dp[2][0] = 5  = sum(dp[1])
  //dp[2][1] = 4  = dp[2][0] - dp[1][0]
  //dp[2][2] = 3 = dp[2][1] - dp[1][1]
  //dp[2][3] = 2 = dp[2][2] - dp[1][2]
  //dp[2][4] = 1 = dp[2][3] - dp[1][3]
  //dp[3][0] = 15 = sum(dp[2])
  //dp[3][1] = dp[3][0] - dp[2][0]...
  const stack = [];
  for (let i = 2; i <= n; i++) {
    dp[i] = Array(5).fill(0);
    let total = 0;
    for (let j = 0; j < 5; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1].reduce((acc, cur) => acc + cur);
      } else {
        dp[i][j] = dp[i][j - 1] - dp[i - 1][j - 1];
      }
      total += dp[i][j];
      stack.push(total);
    }
  }
  return stack[stack.length - 1];
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp
dp답게 풀려고 했는데, 잘 풀었나 모르겠네요..


2. 시간 복잡도 or 결과
O(n^2)
Runtime - 78ms 30.36%
Memory - 42.6MB 23.21%

3. 기타 의견
total의 마지막 값을 구하는 것에 대해..
stack에 담아 주지 않아도 풀 수 있을 것 같은데,
아이디어가 떠오르지 않아서 stack을 이용했습니다..
더 좋은 아이디어가 있을까요?

4. 참고 링크

*/
