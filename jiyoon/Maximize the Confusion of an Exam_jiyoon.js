// 2023.07.25 14:45~15:20
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveAnswers = function (answerKey, k) {
  // max: 최대 연속 답안 길이
  let [left, right, cntOfTrue, cntOfFalse, max] = new Array(5).fill(0);
  // 첫번째 while문 오른쪽으로 이동
  while (right < answerKey.length) {
    if (answerKey[right] === 'T') {
      cntOfTrue++;
    }
    if (answerKey[right] === 'F') {
      cntOfFalse++;
    }
    // 두번쨰 while문 왼쪽으로 이동
    // 왼쪽으로 이동하면서 T나 F개수 감소
    while (cntOfTrue > k && cntOfFalse > k) {
      if (answerKey[left] === 'T') {
        cntOfTrue--;
      }
      if (answerKey[left] === 'F') {
        cntOfFalse--;
      }
      left++;
    }
    // 현재까지의 최대 연속 길이를 저장
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};
/*
1. 알고리즘 or 자료구조 선택 이유
sliding window

2. 시간 복잡도 or 결과
O(n)
Runtime - 85ms 68.95%
Memory - 46.07MB 21.19%

3. 기타 의견
문제만 읽었을 때는 어찌 풀지 감이 안 왔는데,
풀이 보니까 할만했던 것 같네요 ㅜ

4. 참고 링크
https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1865245/javascript-o-n-sliding-window-solution-faster-than-95-easy-to-read-and-understand/
*/
