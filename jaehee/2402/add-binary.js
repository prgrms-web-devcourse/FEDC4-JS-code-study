/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  const answer = [];

  if (a.length < b.length) {
    [a, b] = [b, a];
  }

  let spare = 0;
  a.forEach((_v, idx) => {
    if (b[idx] === undefined) b[idx] = "0";
    const now = Number(a[idx]) + Number(b[idx]);
    if (now + spare >= 2) {
      answer.push((now + spare - 2).toString());
      spare = 1;
    } else {
      answer.push((now + spare).toString());
      spare = 0;
    }
  });
  if (spare) answer.push("1");

  return answer.reverse().join("");
};

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
Runtime
59
ms
Beats
53.74%
of users with JavaScript
Memory
50.93
MB
Beats
22.96%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
