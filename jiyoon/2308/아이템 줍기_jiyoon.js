// 58m
function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 1) 좌표를 2배로 늘린다.
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  let dobuleRec = rectangle.map((rec) => rec.map((point) => point * 2));

  // 2) 상, 하, 좌, 우 방향 설정
  const moveX = [1, -1, 0, 0];
  const moveY = [0, 0, 1, -1];

  // 3) 시작 위치를 최초의 큐에 담는다.
  const start = [characterX, characterY, 0];
  let que = [start];

  // 4) 움직일 수 있는 좌표를 2차원 배열로 정의하여 모두 0으로 채운다.
  // 50 * 50인데 넉넉하게 51 * 51로
  let range = Array.from({ length: 102 }, () => Array(102).fill(0));

  // 5) 테두리는 1, 테두리의 내부는 2로 값을 변경한다.
  dobuleRec.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (range[i][j] === 0) range[i][j] = 1;
        } else {
          range[i][j] = 2;
        }
      }
    }
  });

  // 6) 시작 위치를 0으로 변경하여 다시 돌아가지 못하게 한다.
  range[characterX][characterY] = 0;

  // 7) 큐에 담긴 값이 없을 때(도착지점에 도착했을 때)까지 반복한다.
  while (que.length) {
    // 8) 처음 값(shift)을 가져와 BFS 탐색을 한다.
    let [x, y, move] = que.shift();

    // 9) 현재 위치가 도착 위치에 도달하면 리턴한다.
    if (x === itemX && y === itemY) return move / 2;

    // 10) 도착하지 않았다면 움직일 수 있는( 1인 경우 ) 좌표 값과 횟수를 큐에 담는다.
    for (let i = 0; i < 4; i++) {
      let nowX = x + moveX[i];
      let nowY = y + moveY[i];
      if (range[nowX][nowY] === 1) {
        que.push([nowX, nowY, move + 1]);
        range[nowX][nowY] = 0;
      }
    }
  }
  return 0;
}

/*
1. 알고리즘 or 자료구조 선택 이유
최단거리 bfs

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.49ms, 33.6MB)
테스트 2 〉	통과 (0.45ms, 33.6MB)
테스트 3 〉	통과 (0.30ms, 33.6MB)
테스트 4 〉	통과 (0.28ms, 33.5MB)
테스트 5 〉	통과 (0.30ms, 33.6MB)
테스트 6 〉	통과 (0.32ms, 33.6MB)
테스트 7 〉	통과 (0.77ms, 33.6MB)
테스트 8 〉	통과 (0.69ms, 33.6MB)
테스트 9 〉	통과 (0.87ms, 33.7MB)
테스트 10 〉	통과 (1.26ms, 33.6MB)
테스트 11 〉	통과 (0.93ms, 33.7MB)
테스트 12 〉	통과 (1.51ms, 33.8MB)
테스트 13 〉	통과 (1.20ms, 33.7MB)
테스트 14 〉	통과 (0.61ms, 33.7MB)
테스트 15 〉	통과 (0.63ms, 33.7MB)
테스트 16 〉	통과 (0.80ms, 33.8MB)
테스트 17 〉	통과 (0.76ms, 33.7MB)
테스트 18 〉	통과 (0.80ms, 33.9MB)
테스트 19 〉	통과 (1.07ms, 33.7MB)
테스트 20 〉	통과 (1.05ms, 33.7MB)
테스트 21 〉	통과 (0.78ms, 33.7MB)
테스트 22 〉	통과 (1.06ms, 33.6MB)
테스트 23 〉	통과 (1.30ms, 33.6MB)
테스트 24 〉	통과 (0.77ms, 33.7MB)
테스트 25 〉	통과 (0.56ms, 33.6MB)
테스트 26 〉	통과 (0.91ms, 33.4MB)
테스트 27 〉	통과 (0.67ms, 33.6MB)
테스트 28 〉	통과 (0.87ms, 33.7MB)
테스트 29 〉	통과 (0.91ms, 33.6MB)
테스트 30 〉	통과 (0.92ms, 33.7MB)

3. 기타 의견
다음에는 진짜 풀 수 있을 것 같아요 ..ㅋㅋ

4. 참고 링크
https://cocococo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-Lv3-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A4%8D%EA%B8%B0

*/
