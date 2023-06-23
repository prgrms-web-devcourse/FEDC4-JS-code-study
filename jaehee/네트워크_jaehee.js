function solution(n, computers) {
  let answer = 0;
  const maps = {};
  const passed = Array.from({ length: n + 1 }, () => 0);

  // 이어진 노드를 각 인덱스에 저장
  computers.forEach((net, idx) => {
    maps[idx] = [];
    net.forEach((connected, idx2) => {
      if (idx !== idx2 && connected) maps[idx].push(idx2);
    });
  });

  function DFS(idx) {
    if (passed[idx]) return;
    passed[idx] = 1;

    maps[idx].forEach((target) => DFS(target));
  }

  for (let i = 0; i < n; i++) {
    if (passed[i]) continue;
    answer += 1;

    DFS(i);
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
각 컴퓨터 별 연결된 컴퓨터를 저장하고,
모든 컴퓨터를 순회하며 연결된 컴퓨터를 모두 방문처리 했습니다.
DFS나 BFS 둘 다 가능하나, DFS가 더 간단해 보여 DFS로 구현했습니다.

2. 시간 복잡도 or 결과
O(n^2) n: 컴퓨터의 개수

테스트 1 〉	통과 (0.20ms, 33.4MB)
테스트 2 〉	통과 (0.24ms, 33.5MB)
테스트 3 〉	통과 (0.37ms, 33.5MB)
테스트 4 〉	통과 (0.29ms, 33.5MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.54ms, 33.5MB)
테스트 7 〉	통과 (0.44ms, 33.5MB)
테스트 8 〉	통과 (0.46ms, 33.6MB)
테스트 9 〉	통과 (0.43ms, 33.4MB)
테스트 10 〉	통과 (0.33ms, 33.5MB)
테스트 11 〉	통과 (0.72ms, 33.7MB)
테스트 12 〉	통과 (0.57ms, 33.7MB)
테스트 13 〉	통과 (0.56ms, 33.5MB)

3. 기타 의견 

4. 참고 링크

*/
