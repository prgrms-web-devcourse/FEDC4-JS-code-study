/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = {};
  const checks = Array.from({ length: numCourses }, () => 0);
  const needme = {};

  prerequisites.forEach(([course, pre]) => {
    graph[course] ? graph[course].push(pre) : (graph[course] = [pre]);
    needme[pre] ? needme[pre].push(course) : (needme[pre] = [course]);
  });

  checks.forEach((v, idx) => {
    if (!graph[idx]) checks[idx] = 1;
  });
  const bfs = (i) => {
    const q = [i];
    const visited = Array.from({ length: numCourses }, () => 0);
    while (q.length) {
      const now = q.shift();
      let pass = true;
      if (visited[now]) continue;
      visited[now] = 1;
      if (!graph[now]) {
        continue;
      }
      for (let pre of graph[now]) {
        if (!checks[pre]) {
          pass = false;
          q.push(pre);
        }
      }
      if (pass) {
        checks[now] = 1;
        if (needme[now]) {
          for (let node of needme[now]) {
            visited[node] = false;
            q.push(node);
          }
        }
      }
    }
  };

  for (let i = 0; i < numCourses; i++) {
    if (!graph[i]) {
      checks[i] = 1;
    } else {
      bfs(i);
    }
  }
  return checks.every((v) => v);
};

/*
1. 알고리즘 or 자료구조 선택 이유
위상정렬

2. 시간 복잡도 or 결과
Runtime
927
ms
Beats
5.07%
of users with JavaScript
Memory
61.72
MB
Beats
5.02%
of users with JavaScript

3. 기타 의견 
위상 정렬 하는 법이 기억 안 나서 끔찍한 효율 나왔다.

4. 참고 링크

*/
