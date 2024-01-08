/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const answers = [];
  let lastIdx = 0;
  let line = [];
  let spare = maxWidth;

  for (let i = 0; i < words.length; i++) {
    spare -= words[i].length + 1;
    if (spare < -1) {
      spare += words[i].length + 2;
      if (spare === -1) spare += 1;
      let answer = "";
      const space = Math.floor(spare / (line.length - 1));
      let bonus = spare % (line.length - 1);
      for (let j = lastIdx; j < i - 1; j++) {
        answer += words[j];
        answer += " ";
        answer += " ".repeat(space);
        if (bonus) {
          answer += " ";
          bonus -= 1;
        }
      }
      answer += words[i - 1];
      if (line.length === 1) {
        answer += " ".repeat(maxWidth - line[0].length);
      }
      answers.push(answer);
      lastIdx = i;
      line = [words[i]];
      spare = maxWidth - (words[i].length + 1);
    } else {
      line.push(words[i]);
    }
  }

  if (line.length > 0) {
    let answer = "";
    const lefts = line.join(" ");
    answer += lefts;
    answer += " ".repeat(maxWidth - lefts.length);
    answers.push(answer);
  }

  return answers;
};

/*
1. 알고리즘 or 자료구조 선택 이유
구현? 그리디?

2. 시간 복잡도 or 결과

Runtime
47
ms
Beats
86.96%
of users with JavaScript
Memory
41.66
MB
Beats
85.28%
of users with JavaScript

3. 기타 의견 
오래걸림... 좀 차분히 케이스를 나눠야할듯

4. 참고 링크

*/
