/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const isDifferOneWord = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++;
    }
    return count === 1;
  };

  const counts = new Map();
  const paths = new Map();
  const all = [beginWord, ...wordList];

  all.forEach((v) => {
    counts.set(v, Infinity);
    paths.set(v, []);
  });

  for (let i = 0; i < all.length; i++) {
    const now = all[i];
    for (let j = i + 1; j < all.length; j++) {
      const target = all[j];
      if (isDifferOneWord(now, target)) {
        paths.get(now).push(target);
        paths.get(target).push(now);
      }
    }
  }

  counts.set(beginWord, 1);
  const q = [beginWord];

  while (q.length) {
    const now = q.shift();
    const time = counts.get(now);

    paths.get(now).forEach((v) => {
      if (counts.get(v) > time + 1) {
        counts.set(v, time + 1);
        q.push(v);
      }
    });
  }

  const answer = counts.get(endWord);
  return answer === Infinity || !answer ? 0 : answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
BFS

2. 시간 복잡도 or 결과
Runtime
1550
ms
Beats
5.52%
of users with JavaScript
Memory
59.16
MB
Beats
34.40%
of users with JavaScript

3. 기타 의견 
효율 최적화해보기

4. 참고 링크

*/
