// 31m
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  // s: "ADOBECODEBANC"
  let min = ''; // 최소 길이의 부분 문자열
  let left = 0;
  let right = -1;
  const map = {}; // 각 t의 문자 개수

  t.split('').forEach((v) => {
    if (!map[v]) map[v] = 1;
    else map[v] = map[v] + 1;
  });
  // map = {'A': 2, 'B': 2, 'C': 1}

  let count = Object.keys(map).length; // 다른 문자 개수 3
  while (right <= s.length) {
    if (count !== 0) {
      right++;
      let current = s[right];
      // current가 map에 존재하면
      if (map[current] !== null) {
        map[current]--; // 해당 문자 개수 감소
      }
      if (map[current] === 0) count--;
    } else {
      // right가 5일때, t의 모든 문자가 포함(A,B,C)
      // map = { 'A': 1, 'B': 1, 'C': 0 }
      let current = s[left];
      // map에 포함되는 문자가 있으면 1증가
      if (map[current] !== null) map[current]++;
      // map에 포함되는 문자의 개수가 1이상이면 count증가해서 처음 if문으로
      if (map[current] > 0) count++;
      let temp = s.substring(left, right + 1); // ADOBEC
      if (min === '') min = temp;
      else min = min.length < temp.length ? min : temp;
      left++;
    }
  }
  return min;
};
/*
1. 알고리즘 or 자료구조 선택 이유
slice window

2. 시간 복잡도 or 결과

3. 기타 의견
느낀점이.. 문제 해설 대충 이해하니까 다시 못 풀겠네요..
일단 커밋하고 다시 공부하겠습니다 ..!

4. 참고 링크
https://leetcode.com/problems/minimum-window-substring/solutions/411388/javascript-solution-w-detailed-comments/
*/
