const jump = function (nums) {
  const dp = [0];
  // dp 배열의 나머지 요소를 최대값으로 초기화
  // 최소 점프 횟수를 업데이트할 때 작은 값으로 갱신하기 위해
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Number.MAX_VALUE;
  }
  // 각 요소에 대한 점프 횟수 계산
  nums.map((num, i) => {
    // j는 점프 거리
    for (let j = 1; j <= num && i + j < nums.length; j++) {
      // 현재 위치 i+j까지의 최소 점프 횟수 dp[i+j]를 계산
      // 현재 위치까지의 최소 점프 횟수 dp[i]와 1을 더한 값과,
      // 현재 위치의 최소 점프 횟수 dp[i+j]를 비교하여 작은 값을 dp[i+j]에 할당
      dp[i + j] = dp[i] + 1 < dp[i + j] ? dp[i] + 1 : dp[i + j];
    }
  });

  return dp[nums.length - 1];
};
/*
1. 알고리즘 or 자료구조 선택 이유
dp
풀 수 있었을 것 같은데, for문의 조건문 처리가 어려웠네요..

2. 시간 복잡도 or 결과
Runtime - 129ms 28.20%
Memory - 46.2MB 13.22%

3. 기타 의견
1. dp 배열 생성
2. nums를 반복문으로 탐색
  2-1. num값 만큼 반복문을 진행하며 경우 확인 (num = 2일 경우, 1칸 뛰었을 때/2칸 뛰었을 경우 존재)
  2-2. n만큼 점프한 칸의 값(dp[i+n])이 현재 칸까지의 최소 점프횟수 + 1(dp[i]+1) 보다 클 경우, 값 갱신(dp[i+n] = dp[i]+1)
3. dp의 마지막 값을 반환

4. 참고 링크
https://dev-note-97.tistory.com/304
*/
