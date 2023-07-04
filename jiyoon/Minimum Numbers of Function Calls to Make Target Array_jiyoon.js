/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
  let cnt = 0;
  while (true) {
    if (nums.every((n) => n === 0)) {
      break;
    }
    if (nums.every((n) => n % 2 === 0)) {
      for (let i = 0; i < nums.length; i++) {
        nums[i] /= 2;
      }
      cnt++;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1) {
        nums[i]--;
        cnt++;
      }
    }
  }
  return cnt;
};
/*
1. 알고리즘 or 자료구조 선택 이유
그리디
nums의 배열이 모두 짝수이면 2로 나누어주고, 하나라도 홀수가 있으면 1을 빼주는 식으로 진행했습니다.
nums의 배열 요소가 모두 0이면 종료합니다.

2. 시간 복잡도 or 결과
O(n^2)
Runtime - 99ms 81.82%
Memory - 46.1MB 90.01%

3. 기타 의견

4. 참고 링크

*/
