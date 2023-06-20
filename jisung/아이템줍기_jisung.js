"use strict";
function solution(rectangle, characterX, characterY, itemX, itemY) {
  let map = Array.from(Array(103).fill(0), () => Array(103).fill(0));

  let doubleRectangle = rectangle.map((current) =>
    current.map((point) => point * 2)
  ); // 주어진 점을 두배로 늘린다

  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          if (map[j][i] === 1) {
            continue;
          } else {
            map[j][i] += 1; // 테두리인 경우는 값을 1로 설정
          }
        } else {
          map[j][i] += 2; // 테두리가 아닌 경우
        }
      }
    }
  });

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, 1, -1];

  const queue = [[characterX, characterY, 0]];
  map[characterX][characterY] += 100;

  while (queue.length) {
    // BFS로 테두리를 탐색
    const [currentX, currentY, count] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return count / 2; // 먼저 도착점에 도착하면 해당 값을 반환
    }

    for (let i = 0; i < 4; i++) {
      const [nX, nY] = [currentX + directionX[i], currentY + directionY[i]];

      if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101)
        if (map[nX][nY] === 1) {
          map[nX][nY] += 100; // 지나간 테두리는 100을 더해 다시 해당값을 탐색하지 않게 한다.
          queue.push([nX, nY, count + 1]);
        }
    }
  }
}
