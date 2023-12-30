/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i + 1 >= citations[i]) {
      h = Math.max(h, citations[i]);
    } else {
      h = Math.max(h, i + 1);
    }
  }

  return h;
};

/*
1. 알고리즘 or 자료구조 선택 이유
sorting

2. 시간 복잡도 or 결과
Runtime
53
ms
Beats
63.63%
of users with JavaScript
Memory
41.83
MB
Beats
75.35%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
