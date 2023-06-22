class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front++];
    return returnValue;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const xs = [0, 0, -1, 1];
const ys = [1, -1, 0, 0];

const [n, k] = input[0].split(" ").map((v) => +v);
const maps = input.slice(1, n + 1).map((v) => v.split(" ").map((v) => +v));
const [s, targetX, targetY] = input[n + 1].split(" ").map((v) => +v);
const locVirus = {};

const q = new Queue();

// 바이러스 별 위치 저장
for (let i = 0; i < maps.length; i++) {
  for (let j = 0; j < maps.length; j++) {
    const virus = maps[i][j];
    if (virus) {
      locVirus[virus]
        ? locVirus[virus].push([i, j])
        : (locVirus[virus] = [[i, j]]);
    }
  }
}

// 바이러스를 번호 순서대로 큐에 넣기
for (let key of Object.keys(locVirus)) {
  locVirus[key].forEach((loc) => q.enqueue([+key, ...loc, 0]));
}

// 큐에서 바이러스를 꺼내서 상하좌우로 퍼뜨리기
while (q.size()) {
  const [virus, x, y, time] = q.dequeue();
  if (time >= s) break; // s초 시점의 바이러스까지만 퍼뜨리기

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + xs[i], y + ys[i]];

    if (nx < 0 || nx > n - 1 || ny < 0 || ny > n - 1 || maps[nx][ny]) {
      continue;
    }
    maps[nx][ny] = virus;
    q.enqueue([virus, nx, ny, time + 1]);
  }
}

console.log(maps[targetX - 1][targetY - 1]);

/*
1. 알고리즘 or 자료구조 선택 이유
상하좌우 탐색이므로 BFS가 먼저 떠올랐습니다.
- 초마다 한 주기로 동작하는점
- 바이러스가 번호 순서대로 퍼져야 하는 점
을 고려하여 바이러스 번호순대로 시간과 함께 큐에 넣어서 풀었습니다.

2. 시간 복잡도 or 결과
O(N^2) (N: 맵의 한 변의 길이)

3. 기타 의견 

4. 참고 링크

*/
