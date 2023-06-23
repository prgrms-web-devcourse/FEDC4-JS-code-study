"use strict";
function dfs(graph, startNode, visited) {
  // graph, visited는 저쪽 함수에 있는 거니까 접근을 못 함..!
  visited[startNode] = true;

  for (let linked of graph[startNode]) {
    if (!visited[linked]) {
      visited[linked] === true;
      dfs(graph, linked, visited);
    }
  }
}
function solution(n, computers) {
  // 노드 개수
  let node = n;

  // 그래프 틀 잡아주기..!
  let graph = [...new Array(n)].map((v) => []);
  let visited = [...new Array(n)].fill(false);

  // 연결 정보 초기화 해주기...!
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1) {
        // 연결이 되어 있다는 거야...!
        graph[i].push(j);
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === false) {
      dfs(graph, i, visited);
      cnt += 1;
    }
  }

  return cnt;
}

/*
1. 알고리즘 or 자료구조 선택 이유
몇 개가 연결이 되어있는지를 구하는 문제였습니다. 
그래서 몇 개인지 구하려면 완전 탐색으로 알아볼 수 밖에 없었고, 그래프 형태로 주어져서
그래프 + 완전탐색 = dfs라는 결론에 도달해 dfs를 사용하였습니다. 

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.28ms, 33.5MB)
테스트 3 〉	통과 (0.25ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.4MB)
테스트 6 〉	통과 (0.34ms, 33.5MB)
테스트 7 〉	통과 (0.23ms, 33.4MB)
테스트 8 〉	통과 (0.33ms, 33.4MB)
테스트 9 〉	통과 (0.25ms, 33.5MB)
테스트 10 〉	통과 (0.29ms, 33.6MB)
테스트 11 〉	통과 (0.66ms, 33.8MB)
테스트 12 〉	통과 (0.60ms, 33.7MB)
테스트 13 〉	통과 (0.37ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0


3. 기타 의견 
사실 3단계 급은 아니라고 생각을 합니다! 
저는 dfs함수에서 범위를 check해줬는데, 범위를 check하지 않는 방법도 생각해보고 있습니다. 


4. 참고 링크
- 딱히 참고는 하지 않았습니다!
*/
