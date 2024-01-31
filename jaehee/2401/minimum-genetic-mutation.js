/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const checkOneMutate = (startGene, endGene) => {
    let count = 0;
    startGene.split("").forEach((v, idx) => {
      if (v !== endGene[idx]) count++;
    });
    return count === 1;
  };

  const counts = new Map();
  const moves = new Map();
  const all = [startGene, ...bank];
  all.forEach((v) => {
    moves.set(v, []);
    counts.set(v, Infinity);
    bank.forEach((target) => {
      if (checkOneMutate(v, target)) {
        moves.get(v).push(target);
      }
    });
  });

  const q = [startGene];
  counts.set(startGene, 0);

  while (q.length) {
    const now = q.shift();
    const time = counts.get(now);
    moves.get(now).forEach((v) => {
      if (counts.get(v) > time + 1) {
        counts.set(v, time + 1);
        q.push(v);
      }
    });
  }

  return counts.get(endGene) === Infinity || !counts.get(endGene)
    ? -1
    : counts.get(endGene);
};

/*
1. 알고리즘 or 자료구조 선택 이유
BFS

2. 시간 복잡도 or 결과
Runtime
48
ms
Beats
78.47%
of users with JavaScript
Memory
49.32
MB
Beats
6.94%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
