const maps = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const target = digits.split("");
  const answer = [...maps[target[0]]];
  let start = 0;
  let end = answer.length;

  for (let i = 1; i < target.length; i++) {
    for (let j = start; j < end; j++) {
      const now = answer[j];
      maps[target[i]].forEach((v) => {
        answer.push(now + v);
      });
    }
    const added = maps[target[i]].length * (end - start);
    start = end;
    end += added;
  }

  return answer.slice(start, start + end);
};

/*
1. 알고리즘 or 자료구조 선택 이유
backtracking

2. 시간 복잡도 or 결과
Runtime
55
ms
Beats
39.81%
of users with JavaScript
Memory
48.91
MB
Beats
8.40%
of users with JavaScript

3. 기타 의견 


4. 참고 링크

*/
