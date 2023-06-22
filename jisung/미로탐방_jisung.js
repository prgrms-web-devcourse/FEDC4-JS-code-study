"use strict";
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
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const [goalY, goalX] = [N - 1, M - 1]; // 도착 위치
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 인접(좌우상하)한 칸들

// BFS
const bfs = () => {
  const queue = new Queue();
  queue.enqueue([0, 0, 1]); // 좌표 및 움직인 칸 수

  while (queue.size()) {
    const [curY, curX, move] = queue.dequeue(); // 움직인 칸 수를 계속 돌아준다.
    // 저번엔 y, x로만했는데 움직인 칸 수 move까지
    // 현재 위치가 도착 지점에 도달하면 움직인 칸 수 반환
    if (goalY === curY && goalX === curX) return move;

    // 다음 이동할 인접 위치 탐색을 위한 반복문
    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];

      // 다음 위치가 미로 밖으로 벗어나지 않고 길이 있는 곳(1)이면
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && maze[ny][nx]) {
        maze[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx, move + 1]); // 다음 위치넣고 한 칸 이동
      }
    }
  }
};

console.log(bfs());

/*
1. 알고리즘 or 자료구조 선택 이유
- 마찬가지로 격자판에서 최단거리를 찾는 문제여서 바로 bfs가 떠올랐습니다! 

2. 시간 복잡도 or 결과
- while안에서 for 4번을 방향대로 무조건 돌아줘야해서 O(N^2)이 소요됐습니다.
- 백준 문제라 결과는 맞았습니다! 로 쓰겠습니다!

3. 기타 의견
- 최대한 다른 방식으로도 풀어보려고 했는데, 딱히 생각이 나질 않아서, 
- 앞으로의 최단거리 문제는 그냥 이런식으로 풀어야 할 것 같습니다! 

4. 참고 링크
  - 프로그래머스 게임맵 최단거리를 그대로 참고하였습니다! (변수명도 조금 바꿔봤습니다.)

5. 문제 이해
- 마찬가지로 시작점과 끝점이 주어지고 갈 수 있는 최소한의 칸을 이용해서 가는 문제였습니다.
- 푸는 방식이 약간 그리디 방식도 조금 생각이 나서...
- 사실 그리디가 좀 어렵고 많이 약한 알고리즘인데, 오히려 더 숙제가 생긴거같아서... 슬픕니다. 
*/
