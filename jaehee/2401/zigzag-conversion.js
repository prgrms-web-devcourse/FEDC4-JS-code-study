/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const spaces = Array.from({ length: numRows }, () => []);
  const chars = s.split("");

  let loc = 0;
  while (chars.length > 0) {
    if (loc === 0) {
      for (let i = 0; i < numRows; i++) {
        spaces[i].push(chars.shift());
      }
      loc = numRows - 2;
    } else {
      for (let i = numRows - 1; i >= 0; i--) {
        if (i === loc) {
          spaces[i].push(chars.shift());
        } else {
          spaces[i].push("");
        }
      }
      loc -= 1;
    }
  }

  let answer = "";
  for (let i = 0; i < spaces.length; i++) {
    answer += spaces[i].join("");
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유


2. 시간 복잡도 or 결과
O(N*M)

Runtime
159
ms
Beats
11.42%
of users with JavaScript
Memory
75.78
MB
Beats
5.12%
of users with JavaScript

3. 기타 의견 


4. 참고 링크

*/
