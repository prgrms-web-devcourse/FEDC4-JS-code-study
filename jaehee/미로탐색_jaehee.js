const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.queue[this.rear++] = item;
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

const xs = { 0: 0, 1: 0, 2: -1, 3: 1 };
const ys = { 0: 1, 1: -1, 2: 0, 3: 0 };

const [n, m] = input[0].split(" ").map((v) => parseInt(v));
const maps = input.slice(1, n + 1).map((v) =>
  v
    .trim()
    .split("")
    .map((v) => parseInt(v))
);

const q = new Queue();
const xTarget = n - 1;
const yTarget = m - 1;
q.enqueue([0, 0, 1]);

while (q.size()) {
  const [x, y, time] = q.dequeue();

  if (x === xTarget && y === yTarget) {
    console.log(time);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [nx, ny, nTime] = [x + xs[i], y + ys[i], time + 1];
    if (
      nx < 0 ||
      nx > xTarget ||
      ny < 0 ||
      ny > yTarget ||
      maps[nx][ny] === 0
    ) {
      continue;
    }
    maps[nx][ny] = 0;
    q.enqueue([nx, ny, nTime]);
  }
}

/*
1. 알고리즘 or 자료구조 선택 이유
게임 맵 최단거리 문제와 동일

2. 시간 복잡도 or 결과
O(N*M)

3. 기타 의견 
이번에는 큐를 직접 만들어 보았습니다...
백준에서는 javascript로 코드 짜기가 번거로운 면이 있네요

4. 참고 링크

*/
