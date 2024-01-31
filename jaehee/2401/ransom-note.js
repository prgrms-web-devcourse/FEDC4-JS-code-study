/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const targetObjs = {};
  const racipes = {};
  ransomNote.split("").forEach((v) => {
    targetObjs[v] ? (targetObjs[v] += 1) : (targetObjs[v] = 1);
  });
  magazine.split("").forEach((v) => {
    racipes[v] ? (racipes[v] += 1) : (racipes[v] = 1);
  });

  for (let key of Object.keys(targetObjs)) {
    if (racipes[key] === undefined) return false;
    if (racipes[key] < targetObjs[key]) return false;
  }

  return true;
};

/*
1. 알고리즘 or 자료구조 선택 이유
hash

2. 시간 복잡도 or 결과

Runtime
Runtime
77
ms
Beats
63.13%
of users with JavaScript
Memory
52.58
MB
Beats
5.13%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
