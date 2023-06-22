// 2023.06.20 16:00~17:05
// input.txt로 테스트 입력받기
const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : './jiyoon/2178-미로탐색/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [n, m] = input.shift().split(' ');
const map = input.map((v) => v.split('').map((x) => +x));
solution(n, m, map);

function solution(n, m, map) {
  // n: 세로, m:가로
  // 목표지점
  const goalX = m - 1;
  const goalY = n - 1;

  // 상, 하, 좌, 우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [currY, currX, move] = queue.shift();
    if (currX === goalX && currY === goalY) {
      console.log(move);
      return move;
    }
    for (let i = 0; i < 4; i++) {
      const newX = currX + dx[i];
      const newY = currY + dy[i];

      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        map[newY][newX] === 1
      ) {
        queue.push([newY, newX, move + 1]);
        map[newY][newX] = 0;
      }
    }
  }
}

/*
1. 알고리즘 or 자료구조 선택 이유
최단거리를 구해야 하므로 bfs로 풀어야 한다.

2. 시간 복잡도 or 결과
O(가로길이*세로길이*4)

3. 기타 의견
전에 풀어봐서 비슷하게 풀었습니다
백준 에디터 node.js는 처음 써봐서 오래걸렸네요..

4. 참고 링크
에디터: https://velog.io/@dishate/%EB%B0%B1%EC%A4%80-javascript-node.js-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0
*/
