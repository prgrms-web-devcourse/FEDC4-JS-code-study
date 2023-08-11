## 1. 다익스트라 알고리즘

### 1. 개념

- 가중 그래프에서 **가중치의 합이 최소**가 되는 경로를 찾는 **최단 경로**를 찾기 위한 알고리즘 중 하나
- 그리디를 바탕으로 하고, DP로 보기도 한다.
  > 그리디 - 항상 최단 경로를 찾고 탐욕적으로 선택<br>
  > DP - 이미 계산된 경로를 저장후, 이를 활용해 중복된 하위 문제를 품
- 다익스트라 알고리즘은 **음수 가중치가 포함된 그래프에서는 사용할 수 없다.**
- 시간복잡도 O(nlogn) or O(n)

### 2. 구현

#### 2-1. 구현 이해

그림에서 **A -> E의 가중치 합이 최소인 최단 경로** 구하기<br>
알파벳 순서가 인덱스 순서라고 가정, `G[A][B]는 A와 B사의 거리(가중치) = 10`

<img src="https://velog.velcdn.com/images/jiyoon2/post/147f7653-9e01-48c9-aeb3-6bde2bb8df0b/image.png" width="60%">

1. 최단 경로를 저장할 distance 배열을 만든다.<br>
   출발 노드 A(index = 0)은 자기 자신으로 0으로 초기화.<br>
   `dist = [0, Infinity, Infinity, Infinity, Infinity]`

2. A에서 다음으로 갈 수 있는 지점들의 가중치를 변경한다.<br>
   이때,` dist[A] + G[A][B]와 dist[B]`를 비교한다.<br>
   (dist에 기록된 A까지의 최단 경로에 추가될 B의 가중치를 합한 값(G[A][B])와 dist에 기록된 B의 최단 경로를 비교)<br>
   0 + 10 < Infinity 이므로 dist를 갱신한다.<br>
   `dist = [0,10,Infinity,Infinity,Infinity]`

3. A가 갈 수 있는 또다른 이웃 정점인 C도 갱신<br>
   `dist[A] + G[A][C]와 dist[c]` 비교<br>
   `dist = [0,10,5,Infinity,Infinity]`

4. A를 visited 처리 -> A는 더이상 사용하지 않음

5. 미탐색 정점 중 최단 경로를 가진 정점(C)으로 간다.<br>
   현재 dist 배열에 최단 경로를 가진 정점은 C<br>

6. C정점을 선택하고 경로를 확정한다.<br>
   이 경로는 추후에도 값이 바뀌지 않는다.

7. C에서 다음으로 갈 수 있는 지점들의 가중치를 변경한다.(B, D, E)<br>
   `dist[C](5) + G[C][B](3)와 dist[B](10)` 비교 => 8<br>
   `dist[C](5) + G[C][D](9)와 dist[D](Infinity)` 비교 => 14<br>
   `dist[C](5) + G[C][E](2)와 dist[E](Infinity)` 비교 => 7<br>
   `dist = [0, 8, 5, 14, 7]`

8. C를 visited 처리

9. 미탐색 정점 중 최단 경로를 가진 정점으로 간다.<br>
   A,C를 제외한 최단 경로를 가진 정점은 E(7)

10. 목적 정점인 D가 visited 처리 되거나, 더 이상 미탐색 정점이 없을때까지 반복한다.

11. 최종 dist
    `dist = [0,8,5,9,7]`

#### 2-2 구현 방법

인접행렬 or 인접 리스트로 가능하다.

**1. 간단한 다익스트라 알고리즘**

> 시간복잡도 O(n)

```js
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let visited = [...Array(n + 1).fill(false)];
let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
  //초기화
  const graph = Array.from(Array(n + 1), () => []);
  for (const v of arr) {
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  //방문하지 않은 노드에서 최단 거리가 가장 짧은 노드의 인덱스 반환
  const getSmallestNode = () => {
    let min = Infinity;
    let index = 0;
    for (const i in d) {
      if (!visited[i] && min > d[i]) {
        min = d[i];
        index = i;
      }
    }
    return index;
  };

  const dijkstra = (start) => {
    //시작 노드 초기화
    d[start] = 0;
    visited[start] = true;
    for (const i of graph[start]) {
      const [node, cost] = i;
      d[node] = cost;
    }

    //시작 노드를 제외한 전체 노드에 대해 반복
    for (let i = 0; i < n; i++) {
      const cur = +getSmallestNode();
      visited[cur] = true;

      for (const j of graph[cur]) {
        const node = j[0];
        const cost = d[cur] + j[1];
        if (cost < d[node]) {
          d[node] = cost;
        }
      }
    }
  };

  dijkstra(start);

  for (let i = 1; i <= n; i++) {
    if (d[i] === Infinity) {
      console.log('INFINITY');
    } else {
      console.log(d[i]);
    }
  }

  return d;
}

console.log(solution(n, m, start, arr));
```

**2. 개선된 다익스트라 알고리즘**

> 최소힙으로 구현한 우선순위 큐 활용, 시간복잡도 O(nlogn), visited불필요

```js
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
  const graph = Array.from(Array(n + 1), () => []);
  for (const v of arr) {
    const [a, b, c] = v;
    graph[a].push([b, c]);
  }

  const dijkstra = (start) => {
    //시작 노드 초기화
    const pq = new PriorityQueue();
    pq.push([0, start]); //[거리, 노드]
    d[start] = 0;

    while (!pq.empty()) {
      const [dist, cur] = pq.pop(); //현재 최단 거리가 가장 짧은 노드

      //최단 거리가 아닌 경우(방문한 적이 있는 경우) 스킵
      if (d[cur] < dist) continue;

      for (const i of graph[cur]) {
        //인접 노드 탐색
        const node = i[0];
        const cost = dist + i[1];
        if (cost < d[node]) {
          pq.push([cost, node]);
          d[node] = cost;
        }
      }
    }
  };

  dijkstra(start);

  for (let i = 1; i <= n; i++) {
    if (d[i] === Infinity) {
      console.log('INFINITY');
    } else {
      console.log(d[i]);
    }
  }

  return d;
}

console.log(solution(n, m, start, arr));
```

**2-2. 우선순위 큐 구현(최소힙)**

```js
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let cur = 0;

    while (2 * cur + 1 < n) {
      const leftChild = 2 * cur + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      //루트 노드의 값이 더 큰 경우 swap
      if (x > this.heap[smallerChild]) {
        [this.heap[cur], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[cur],
        ];
        cur = smallerChild;
      } else {
        break;
      }
    }
  }
}

const pq = new PriorityQueue();
pq.push(3);
pq.push(5);
pq.push(2);
pq.pop();
pq.push(6);
pq.push(1);
pq.pop();

while (!pq.empty()) {
  console.log(pq.pop());

```

### 3. 최단거리 관련 알고리즘

**1. 가중치가 없는 최단거리 -> BFS <br> 2. 모든 가중치가 양수 -> 다익스트라<br> 3. 음수 가중치가 있음 -> 벨만-포드<br> 4. 모든정점 ~ 모든 정점 사이의 최단경로 -> 플로이드-워셜**

## 2. 플로이드 워셜

### 1. 개념

- 가중 그래프에서 **가중치의 합이 최소**가 되는 경로를 찾는 **최단 경로**를 찾기 위한 알고리즘 중 하나
- 한 번 실행하여 모든정점~모든정점 간의 최단 경로를 구할 수 있는 알고리즘
- DP를 바탕으로 한다.
- 음의 사이클의 존재를 판단하여, 음의 사이클이 없는 음의 가중치를 가졌을 때도 사용 가능
- 시간복잡도 O(n^3)

### 2. 구현

#### 2-1. 구현 이해

[플로이드 워셜 구현 이해](https://youngju-js.tistory.com/8?category=1040168)

#### 2-2 구현 방법

```js
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  //최단 거리 테이블 초기화
  let d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) d[i][i] = 0;
  for (const value of arr) {
    const [u, v, cost] = value;
    d[u][v] = cost;
  }

  //모든 노드에 대해 반복
  for (let k = 1; k <= n; k++) {
    //최단 거리 갱신
    for (let from = 1; from <= n; from++) {
      for (let to = 1; to <= n; to++) {
        if (k === from || from === to) continue; //생략 가능
        d[from][to] = Math.min(d[from][to], d[from][k] + d[k][to]);
      }
    }
  }

  let ans = '';
  for (let from = 1; from <= n; from++) {
    for (let to = 1; to <= n; to++) {
      if (d[from][to] === Infinity) ans += 'INFINITY';
      else ans += `${d[from][to]} `;
    }
    ans += '\n';
  }

  return ans;
}

console.log(solution(n, m, arr));
```

✅ 참고자료<br>
[다익스트라 알고리즘](https://youngju-js.tistory.com/5)<br>
[다익스트라 & 플로이드 워셜 구현](https://gyyeom.tistory.com/117)<br>
[플로이드 워셜 알고리즘](https://youngju-js.tistory.com/8?category=1040168)
