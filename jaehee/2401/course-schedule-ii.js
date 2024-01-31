/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const answer = [];
  const degree = Array.from({ length: numCourses }, () => 0);
  const needs = Array.from({ length: numCourses }, () => []);

  prerequisites.forEach(([a, b]) => {
    needs[b].push(a);
    degree[a]++;
  });

  const q = [];

  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    const now = q.shift();
    answer.push(now);

    needs[now].forEach((v) => {
      degree[v]--;
      if (degree[v] === 0) {
        q.push(v);
      }
    });
  }

  return degree.every((v) => v === 0) ? answer : [];
};

/*
1. 알고리즘 or 자료구조 선택 이유
위상정렬

2. 시간 복잡도 or 결과
Runtime
75
ms
Beats
48.39%
of users with JavaScript
Memory
53.12
MB
Beats
26.91%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
