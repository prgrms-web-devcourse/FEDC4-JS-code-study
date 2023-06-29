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

const [n, k] = input[0].split(" ").map(Number);
console.log(n, k);
const [s, x, y] = input.slice(-1)[0].split(" ").map(Number);
const arr = input.slice(0, -1).map((i) => i.split(" ").map(Number));
const graph = Array.from({ length: k + 1 }, () => []); // 2차원 배열 생성 => 크기 (k + 1)

//
// 모든 그래프에 있는 숫자를 방문 처리해주기 위해 마찬가지로 2차원 배열을
// 처음에 모든 값을 false로 초기화 해준다.
// 이후 방문 시 true값을 넣어서 재방문을 하지 않게끔 해줌.
// 크기는 n
const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
console.log(visited);
// 방향 코드
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0]; // 하, 상, 우, 좌

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 0) continue; // 만약 0이면 그냥 무시해도됨

    // 0이 아니라면,
    visited[i][j] = true; // 방문했다는 표시를 남겨주고
    console.log(graph);
    graph[arr[i][j]].push([i, j]); // 그래프에 좌표를 넣어준다. => 2차원 배열을 만들어줌.
  }
}

for (let i = 0; i < s; i++) {
  for (let j = 1; j <= k; j++) {
    const virusQueue = new Queue(); // []

    while (graph[j].length) {
      const [cx, cy] = graph[j].shift();

      for (let d = 0; d < 4; d++) {
        const [nx, ny] = [cx + dx[d], cy + dy[d]];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        if (!visited[nx][ny] && arr[nx][ny] === 0) {
          visited[nx][ny] = true;
          arr[nx][ny] = j;
          virusQueue.enqueue([nx, ny]);
        }
      }
    }

    graph[j] = virusQueue.queue;
  }
}

console.log(arr[x - 1][y - 1]);

/*
1. 알고리즘 or 자료구조 선택 이유
계속해서 낮은순대로 그래프를 탐색하는 문제였습니다.
낮은 순이라는 순서가 따로 존재해서 dfs는 부적합하다고 판단해, bfs를 사용하였습니다  

2. 시간 복잡도 or 결과
- 2중 for문 안에 while문이 있어서 가장 오래걸릴 시 O(N^3)으로 풀었습니다.


3. 기타 의견 
- 이번 코드도 어려워서 많이 참조하였습니다. 
- 문제 이해는 끝났고, 입력을 받는 코드와, queue내부 삽입 코드가 조금 복잡해서 참조했습니다. 


4. 참고 링크
- https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-18045-%EA%B2%BD%EC%9F%81%EC%A0%81-%EC%A0%84%EC%97%BC-javascript
*/
