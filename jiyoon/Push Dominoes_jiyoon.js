//2023.07.09 14:46~16:00
/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
  dominoes = dominoes.split('');
  // dp = 도미노의 각 위치에서 오른쪽 또는 왼쪽으로 가해지는 힘의 양
  // dp = [0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0]
  const dp = Array(dominoes.length).fill(0);

  // 왼쪽에서 진행
  for (let i = 0; i < dominoes.length; i++) {
    // 현재 도미노가 .이 아니거나 이전 도미노가 R이 아니면 밀수 없으므로 패스
    // [".", "L", ".", "R", ".", ".", ".", "L", "R", ".", ".", "L", ".", "."]
    if (dominoes[i] !== '.' || dominoes[i - 1] !== 'R') continue;

    // 밀수 있으면 현재 위치의 도미노를 R로 변경하고 이전 위치의 힘에 1 더함
    dp[i] = dp[i - 1] + 1;
    dominoes[i] = 'R';
  }
  // dp: [0, 0, 0, 0, 1, 2, 3, 0, 0, 1, 2, 0, 0, 0]
  // dominoes: ['.', 'L', '.', 'R','R', 'R', 'R', 'L','R', 'R', 'R', 'L', '.', '.']

  // 오른쪽에서 진행
  for (let i = dominoes.length - 1; i >= 0; i--) {
    // 다음 도미노가 L이 아니면 밀 수 없으므로 패스
    if (dominoes[i + 1] !== 'L') continue;
    // 현재 도미노를 밀 때 필요한 힘(오른쪽 힘)
    const force = dp[i + 1] + 1;

    // 다음 도미노가 L인 경우
    // 현재 위치의 힘이 오른쪽의 힘보다 크거나  현재 도미노가 .이면
    if (dp[i] > force || dominoes[i] === '.') {
      // ?
      dp[i] = force;
      dominoes[i] = 'L';
    } else if (force === dp[i]) {
      dominoes[i] = '.';
    }
  }
  // dp: [1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 1, 0, 0, 0]
  // dominoes: ['L', 'L', '.', 'R','R', '.', 'L', 'L','R', 'R', 'L', 'L','.', '.']
  return dominoes.join('');
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
O(n)
Runtime - 139ms 59.18%
Memory - 57.9MB 91.84%

3. 기타 의견
풀지 못해서 참고 자료를 찾아봤는데,
두 번째, for문에서 두 번째, if문 첫 번째 조건식이 이해가 안됩니다..

제 생각에는 현재 도미노 힘 값이 다음 힘 값보다 크면,
현재 도미노 힘에서 다음 힘 값만큼 빼주고, 현재 도미노가 R로 유지되어야 할 것 같아서요.
무언가 잘 못 생각하고 있는 걸까요?

현재 도미노가 .이면 L로 바뀌는 것에는 동의합니다.

4. 참고 링크
본문 참고: https://leetcode.com/problems/push-dominoes/solutions/2680120/easy-to-understand-javascript-solution-dp-force/

repalceAll을 이용: https://leetcode.com/problems/push-dominoes/solutions/2631948/javascript-solution-use-string-prototype-replaceall/

*/
