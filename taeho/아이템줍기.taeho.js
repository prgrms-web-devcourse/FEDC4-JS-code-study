function solution(rectangle, characterX, characterY, itemX, itemY) {
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const map = Array.from({ length: 103 }, () => Array(103).fill(0));
  const doubleRectangle = rectangle.map((current) => current.map((point) => point * 2));

  for (const [x1, y1, x2, y2] of doubleRectangle) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (map[i][j] === 0) {
            map[i][j] = 1;
          }
        } else {
          map[i][j] = 2;
        }
      }
    }
  }

  // 상하좌우
  const moving = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const queue = [[characterX, characterY, 0]]; // 시작지점
  map[characterX][characterY] = 0;

  while (queue.length) {
    const [currX, currY, move] = queue.shift();
    if (currX === itemX && currY === itemY) return move / 2;

    for (let i = 0; i < moving.length; i++) {
      const nowX = currX + moving[i][0];
      const nowY = currY + moving[i][1];

      if (map[nowX][nowY] === 1) {
        queue.push([nowX, nowY, move + 1]);
        map[nowX][nowY] = 0;
      }
    }
  }
  return 0;
}

/*
1. 알고리즘 or 자료구조 선택 이유
분명 그 때 완벽하게 이해했다라고 생각했는데 생각보다 시간이 오래 걸렸네요..

2. 시간 복잡도 or 결과
시간 복잡도: O(n * 좌표 가로 * 세로)
*/
