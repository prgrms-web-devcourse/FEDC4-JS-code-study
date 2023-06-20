// 2023.06.18 14:45~15:19
function solution(maps) {
  // [상, 하 , 좌, 우]
  const dx = [0, 0, -1, 1]; // 좌,우로 이동
  const dy = [-1, 1, 0, 0]; // 상,하로 이동
  // 게임 맵의 크기
  const xLength = maps[0].length; // 가로 길이
  const yLength = maps.length; // 세로 길이
  // 목표 지점
  const xGoalIndex = xLength - 1;
  const yGoalIndex = yLength - 1;
  // 큐 초기화 y현재위치, x현재위치, 움직인 칸 수
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [yCurrIndex, xCurrIndex, move] = queue.shift();
    // 정답
    if (xCurrIndex === xGoalIndex && yCurrIndex === yGoalIndex) {
      return move;
    } else {
      // 상,하,좌,우 4번 반복
      for (let i = 0; i < 4; i++) {
        const moveX = xCurrIndex + dx[i];
        const moveY = yCurrIndex + dy[i];
        // 맵을 벗어나지 않고, 이동한 칸이 1이라면
        if (
          moveX >= 0 &&
          moveX < xLength &&
          moveY >= 0 &&
          moveY < yLength &&
          maps[moveY][moveX] === 1
        ) {
          queue.push([moveY, moveX, move + 1]);
          // 갔던 곳을 다시 가지 않음
          maps[moveY][moveX] = 0;
        }
      }
    }
  }
  return -1;
}
/*
1. 알고리즘 or 자료구조 선택 이유
지도를 주고 채워진 영역을 찾아야 하는 경우 높은 확률로 DFS/BFS 문제입니다.
캐릭터가 도착 지점까지 지나야 하는 칸의 최솟값을 구해야 하므로 BFS를 사용합니다.
BFS는 큐를 이용하여 구현합니다!

2. 시간 복잡도 or 결과
시간 복잡도가 O(n)일까요?

테스트 1 〉	통과 (13.44ms, 38.1MB)
테스트 2 〉	통과 (6.27ms, 37.7MB)
테스트 3 〉	통과 (7.82ms, 38MB)
테스트 4 〉	통과 (6.65ms, 37.8MB)

3. 기타 의견(접근법)
개인적으로 x, y 정하는 게 헷갈렸는데, 노트로 메모하면서 하니까 이해하기 쉬웠습니다!

4. 참고 링크

*/
