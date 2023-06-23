// 2023.06.21 15:45~16:37
function solution(n, computers) {
  let networkCnt = 0;
  const visited = new Array(n).fill(false);

  const dfs = (i) => {
    visited[i] = true;
    console.log(`${i}번 컴퓨터를 방문`);
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) {
        console.log(
          `${i}번 컴퓨터와 ${j}번 컴퓨터가 연결되어 있고 ${j}번 컴퓨터를 방문하지 않았으면 방문`
        );
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      console.log(`${i}번 컴퓨터에서 새로운 네트워크를 시작`);
      dfs(i);
      networkCnt++;
    }
  }
  console.log(`네트워크 개수: ${networkCnt}`);
  return networkCnt;
}

/*
1. 알고리즘 or 자료구조 선택 이유
컴퓨터가 서로 연결되어 있는지 다 탐색해야 하므로 dfs를 사용해야 합니다.

2. 시간 복잡도 or 결과
O(n^2) - for문을 돌면서 dfs안에 for문이 있어서 O(n^2)이라고 생각합니다.
테스트 1 〉	통과 (2.41ms, 33.7MB)
테스트 2 〉	통과 (2.48ms, 33.6MB)
테스트 3 〉	통과 (2.94ms, 33.6MB)
테스트 4 〉	통과 (4.74ms, 33.8MB)
테스트 5 〉	통과 (2.17ms, 33.6MB)
테스트 6 〉	통과 (3.50ms, 33.8MB)
테스트 7 〉	통과 (2.67ms, 33.6MB)
테스트 8 〉	통과 (4.24ms, 33.7MB)
테스트 9 〉	통과 (5.12ms, 33.8MB)
테스트 10 〉	통과 (3.66ms, 33.7MB)
테스트 11 〉	통과 (4.55ms, 34MB)
테스트 12 〉	통과 (4.20ms, 34MB)
테스트 13 〉	통과 (3.69ms, 33.7MB)
3. 기타 의견
처음에 dfs인건 알았는데, 
어떻게 구현할지 몰라서 풀이를 참고했고,
이해가 잘되지 않아서 출력해 보면서 이해했습니다..!

0번 컴퓨터에서 새로운 네트워크를 시작
0번 컴퓨터를 방문
0번 컴퓨터와 1번 컴퓨터가 연결되어 있고 1번 컴퓨터를 방문
1번 컴퓨터를 방문
2번 컴퓨터에서 새로운 네트워크를 시작
2번 컴퓨터를 방문
네트워크 개수: 2
4. 참고 링크
https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
*/
