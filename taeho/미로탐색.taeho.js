const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const maps = input.map((v) => v.split('').map(Number));
const [goalY, goalX] = [N - 1, M - 1]; // 도착 위치
const moving = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// BFS
const bfs = () => {
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [curY, curX, move] = queue.shift();

    if (goalY === curY && goalX === curX) return move;

    for (let i = 0; i < moving.length; i++) {
      const ny = curY + moving[i][1];
      const nx = curX + moving[i][0];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && maps[ny][nx]) {
        maps[ny][nx] = 0;
        queue.push([ny, nx, move + 1]);
      }
    }
  }
};

console.log(bfs());

/*
1. 알고리즘 or 자료구조 선택 이유
월요일에 했던 게임맵최단거리와 비슷하다고 생각하여 bfs로 풀게 되었습니다. 풀다 보니 완전 똑같은 것 같네요..

2. 시간 복잡도 or 결과
시간 복잡도: O(n * m)

3. 기타 의견
백준 문제는 자바스크립트 입력값이 복잡하다고 생각하여 해야지 해야지 하다가 처음 풀어보는데 좀 어려운 것 같습니다..
입력 부분의 구글링을 통해 풀었던 것 같아요 팁이 있으시다면 말씀 부탁드립니다..!
*/