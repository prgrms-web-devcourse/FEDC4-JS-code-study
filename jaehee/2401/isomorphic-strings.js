/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMatch = new Map();
  const tMatch = new Map();
  const sRel = [];
  const tRel = [];

  s.split("").forEach((v, idx) => {
    if (!sMatch.has(v)) {
      sMatch.set(v, idx);
    }
    sRel.push(sMatch.get(v));
  });

  t.split("").forEach((v, idx) => {
    if (!tMatch.has(v)) {
      tMatch.set(v, idx);
    }
    tRel.push(tMatch.get(v));
  });

  for (let i = 0; i < sRel.length; i++) {
    if (sRel[i] !== tRel[i]) return false;
  }
  return true;
};

/*
1. 알고리즘 or 자료구조 선택 이유
hash

2. 시간 복잡도 or 결과

Runtime
52
ms
Beats
94.25%
of users with JavaScript
Memory
54.01
MB
Beats
5.08%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
