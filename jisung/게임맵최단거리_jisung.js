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

function solution(graph) {
  let answer = 1;
  let visited = graph;
  const queue = new Queue(); // 큐 생성
  const dx = [-1, 1, 0, 0]; // 상 하 좌 우
  const dy = [0, 0, -1, 1];
  const n = graph.length; // 세로길이
  const m = graph[0].length; // 가로길이

  queue.enqueue([0, 0]);
  visited[0][0] = 0;

  while (queue.size() > 0) {
    let size = queue.size();

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.dequeue();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.enqueue([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
}

/*
1. 알고리즘 or 자료구조 선택 이유
- 우선 격자 그래프를 보고 그래프 알고리즘을 선택했습니다.
- 그런데 dfs는 일단 직진식의 알고리즘이라서, 최단거리를 찾는데는 적합하지 않습니다. 
- 반면 bfs는 거리를 시작점에서의 최단거리를 계산해서 가기때문에, 최단거리를 찾는데 적합합니다. 

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.33ms, 33.4MB)
테스트 2 〉	통과 (0.28ms, 33.5MB)
테스트 3 〉	통과 (0.30ms, 33.5MB)
테스트 4 〉	통과 (0.30ms, 33.5MB)
테스트 5 〉	통과 (0.30ms, 33.4MB)
테스트 6 〉	통과 (0.34ms, 33.6MB)
테스트 7 〉	통과 (0.55ms, 33.5MB)
테스트 8 〉	통과 (0.32ms, 33.5MB)
테스트 9 〉	통과 (0.33ms, 33.4MB)
테스트 10 〉	통과 (0.31ms, 33.4MB)
테스트 11 〉	통과 (0.33ms, 33.4MB)
테스트 12 〉	통과 (0.42ms, 33.5MB)
테스트 13 〉	통과 (0.31ms, 33.5MB)
테스트 14 〉	통과 (0.46ms, 33.4MB)
테스트 15 〉	통과 (0.32ms, 33.3MB)
테스트 16 〉	통과 (0.15ms, 33.2MB)
테스트 17 〉	통과 (0.34ms, 33.6MB)
테스트 18 〉	통과 (0.25ms, 33.4MB)
테스트 19 〉	통과 (0.15ms, 33.4MB)
테스트 20 〉	통과 (0.15ms, 33.5MB)
테스트 21 〉	통과 (0.15ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (14.85ms, 38.3MB)
테스트 2 〉	통과 (6.95ms, 37.8MB)
테스트 3 〉	통과 (9.79ms, 38.1MB)
테스트 4 〉	통과 (29.02ms, 37.5MB)


3. 기타 의견
- dfs와 bfs의 차이점을 정확하게는 아직 숙지하지 못 했습니다.

4. 참고 링크
  - 참고하진 않았습니다! 

5. 문제 이해

*/
