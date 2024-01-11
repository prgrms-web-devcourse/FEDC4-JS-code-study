/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let sets = new Set();
  let start = 0;
  let end = 0;
  let answer = 0;
  s.replaceAll(/\W/g, "");
  const characters = s.split("");
  while (start < characters.length && end < characters.length) {
    if (!sets.has(characters[end])) {
      sets.add(characters[end]);
      answer = Math.max(answer, sets.size);
      end++;
    } else {
      sets.delete(characters[start]);
      start++;
    }
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
슬라이딩 윈도우

2. 시간 복잡도 or 결과
O(n)

Runtime
52
ms
Beats
99.66%
of users with JavaScript
Memory
46.81
MB
Beats
68.17%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
