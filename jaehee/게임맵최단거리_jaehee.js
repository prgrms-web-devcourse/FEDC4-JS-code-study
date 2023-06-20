// x와 y의 이동 가능한 경우
const xs = {
  0: 1,
  1: -1,
  2: 0,
  3: 0,
};
const ys = {
  0: 0,
  1: 0,
  2: 1,
  3: -1,
};

function solution(maps) {
  // x와 y가 가질 수 있는 최대 좌표
  const xMaxIdx = maps.length - 1;
  const yMaxIdx = maps[0].length - 1;
  // 각 좌표까지의 최단 거리를 저장할 배열
  const points = Array.from({ length: xMaxIdx + 1 }, () =>
    Array.from({ length: yMaxIdx + 1 }, () => Infinity)
  );
  // 시작점은 1로 초기화
  points[0][0] = 1;
  const q = [[0, 0]];

  while (q.length > 0) {
    const [currentX, currentY] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [tempX, tempY] = [currentX + xs[i], currentY + ys[i]];

      // x와 y가 범위를 벗어나거나, 이동할 수 없는 경우
      if (tempX > xMaxIdx || tempX < 0 || tempY > yMaxIdx || tempY < 0) {
        continue;
      }
      if (maps[tempX][tempY] === 0) {
        continue;
      }

      const newPoint = points[currentX][currentY] + 1;
      const currentPoint = points[tempX][tempY];

      // 방문 기록이 있고, 기존 이력이 더 효율적인 경우
      if (currentPoint <= newPoint && newPoint !== Infinity) {
        continue;
      }
      // 방문 기록이 없거나, 기존 이력이 더 비효율적인 경우
      points[tempX][tempY] = Math.min(currentPoint, newPoint);
      q.push([tempX, tempY]);
    }
  }

  const answer = points[xMaxIdx][yMaxIdx];

  return answer === Infinity ? -1 : answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
맵을 탐색하면서 각 좌표까지의 최단 거리를 저장할 배열을 만들어서 BFS로 탐색했습니다.

2. 시간 복잡도 or 결과
시간 복잡도: O(N*M) (N: maps의 가로 길이, M: maps의 세로 길이)

정확성 테스트
테스트 1 〉	통과 (0.32ms, 33.6MB)
테스트 2 〉	통과 (0.32ms, 33.5MB)
테스트 3 〉	통과 (0.36ms, 33.6MB)
테스트 4 〉	통과 (0.53ms, 33.6MB)
테스트 5 〉	통과 (0.34ms, 33.6MB)
테스트 6 〉	통과 (0.40ms, 33.6MB)
테스트 7 〉	통과 (0.39ms, 33.5MB)
테스트 8 〉	통과 (0.38ms, 33.6MB)
테스트 9 〉	통과 (0.38ms, 33.5MB)
테스트 10 〉	통과 (0.36ms, 33.7MB)
테스트 11 〉	통과 (0.35ms, 33.5MB)
테스트 12 〉	통과 (0.37ms, 33.6MB)
테스트 13 〉	통과 (0.40ms, 33.5MB)
테스트 14 〉	통과 (0.33ms, 33.5MB)
테스트 15 〉	통과 (0.33ms, 33.5MB)
테스트 16 〉	통과 (0.32ms, 33.4MB)
테스트 17 〉	통과 (0.44ms, 33.6MB)
테스트 18 〉	통과 (0.40ms, 33.5MB)
테스트 19 〉	통과 (0.21ms, 33.5MB)
테스트 20 〉	통과 (0.15ms, 33.6MB)
테스트 21 〉	통과 (0.16ms, 33.5MB)

효율성  테스트
테스트 1 〉	통과 (21.09ms, 38.8MB)
테스트 2 〉	통과 (23.98ms, 38.8MB)
테스트 3 〉	통과 (27.54ms, 38.6MB)
테스트 4 〉	통과 (16.57ms, 38.7MB)

3. 기타 의견 

4. 참고 링크

*/
