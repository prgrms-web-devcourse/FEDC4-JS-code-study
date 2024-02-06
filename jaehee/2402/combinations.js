/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const answer = [];

  const addCombi = (answer, time, now) => {
    if (time === 0) {
      answer.push(now);
      return;
    }

    const min = now.length ? Math.max(...now) + 1 : 1;
    for (let i = min; i <= n; i++) {
      addCombi(answer, time - 1, [...now, i]);
    }
  };

  addCombi(answer, k, []);

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유


2. 시간 복잡도 or 결과
Runtime
590
ms
Beats
19.52%
of users with JavaScript
Memory
152.41
MB
Beats
12.98%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
