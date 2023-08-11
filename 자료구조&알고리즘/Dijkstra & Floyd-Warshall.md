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

인접행렬 or 인접 리스트로 가능하다. <br>
[상세 구현 방법](https://gyyeom.tistory.com/117)

예제 [백준 최단경로](https://www.acmicpc.net/problem/1753)

1. 문제
   > 방향그래프가 주어지면 주어진 시작점에서 다른 모든 정점으로의 최단 경로를 구하는 프로그램을 작성하시오.<br> 단, 모든 간선의 가중치는 10 이하의 자연수이다.
2. 입력
   > 첫째 줄에 정점의 개수 V와 간선의 개수 E가 주어진다. (1 ≤ V ≤ 20,000, 1 ≤ E ≤ 300,000)<br> 모든 정점에는 1부터 V까지 번호가 매겨져 있다고 가정한다.<br> 둘째 줄에는 시작 정점의 번호 K(1 ≤ K ≤ V)가 주어진다.<br> 셋째 줄부터 E개의 줄에 걸쳐 각 간선을 나타내는 세 개의 정수 (u, v, w)가 순서대로 주어진다.<br> 이는 u에서 v로 가는 가중치 w인 간선이 존재한다는 뜻이다.<br> u와 v는 서로 다르며 w는 10 이하의 자연수이다.<br> 서로 다른 두 정점 사이에 여러 개의 간선이 존재할 수도 있음에 유의한다.
3. 출력
   > 첫째 줄부터 V개의 줄에 걸쳐, i번째 줄에 i번 정점으로의 최단 경로의 경로값을 출력한다. <br>시작점 자신은 0으로 출력하고, 경로가 존재하지 않는 경우에는 INF를 출력하면 된다.<br>
4. 예제 입력1
   > 5 6<br>
   > 1<br>
   > 5 1 1<br>
   > 1 2 2<br>
   > 1 3 3<br>
   > 2 3 4<br>
   > 2 4 5<br>
   > 3 4 6<br>
5. 예제 출력
   > 0<br>
   > 2<br>
   > 3<br>
   > 7<br>
   > INF

[풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C-javascript)

```js
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class minHeap {
  heapArray = [];
  constructor() {
    this.heapArray.push(null);
  }

  push(data) {
    if (this.heapArray === null) {
      this.heapArray = [];
      this.heapArray.push(null);
      this.heapArray.push(data);
    } else {
      this.heapArray.push(data);
      let inserted_idx = this.heapArray.length - 1;
      let parent_idx = parseInt(inserted_idx / 2);
      while (inserted_idx > 1) {
        if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
          const tmp = this.heapArray[inserted_idx];
          this.heapArray[inserted_idx] = this.heapArray[parent_idx];
          this.heapArray[parent_idx] = tmp;
          inserted_idx = parent_idx;
          parent_idx = parseInt(parent_idx / 2);
        } else {
          break;
        }
      }
    }
  }
  move_down(pop_idx) {
    const left_child = pop_idx * 2;
    const right_child = pop_idx * 2 + 1;

    if (left_child >= this.heapArray.length) {
      return false;
    } else if (right_child >= this.heapArray.length) {
      if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
        return true;
      }
      return false;
    } else {
      if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
        if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
          return true;
        }
        return false;
      } else {
        if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
          return true;
        }
        return false;
      }
    }
  }

  pop() {
    if (this.heapArray === null) {
      return null;
    } else {
      const return_data = this.heapArray[1];
      this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
      this.heapArray.pop();
      let popped_idx = 1;
      while (this.move_down(popped_idx)) {
        const left_child = popped_idx * 2;
        const right_child = popped_idx * 2 + 1;
        if (right_child >= this.heapArray.length) {
          if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
            const tmp = this.heapArray[popped_idx];
            this.heapArray[popped_idx] = this.heapArray[left_child];
            this.heapArray[left_child] = tmp;
            popped_idx = left_child;
          }
        } else {
          if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
            if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[left_child];
              this.heapArray[left_child] = tmp;
              popped_idx = left_child;
            }
          } else {
            if (
              this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
            ) {
              const tmp = this.heapArray[popped_idx];
              this.heapArray[popped_idx] = this.heapArray[right_child];
              this.heapArray[right_child] = tmp;
              popped_idx = right_child;
            }
          }
        }
      }
      return return_data;
    }
  }
}

const [v, e] = input.shift().split(' ').map(Number);
const start = +input.shift();
const graph = Array.from({ length: v + 1 }, () => []);
const distance = Array.from({ length: v + 1 }, () => Infinity);
const visited = Array.from({ length: v + 1 }, () => false);
const pq = new minHeap();

input.forEach((i) => {
  const [from, to, weight] = i.split(' ').map(Number);
  graph[from].push([to, weight]);
});

distance[start] = 0;
pq.push([start, 0]);

while (pq.heapArray.length > 1) {
  const [curNode, dist] = pq.pop();
  if (visited[curNode]) continue;

  visited[curNode] = true;
  for (let [nextNode, nextDistance] of graph[curNode]) {
    if (distance[nextNode] > distance[curNode] + nextDistance) {
      distance[nextNode] = nextDistance + distance[curNode];
      pq.push([nextNode, distance[nextNode]]);
    }
  }
}
console.log(
  distance
    .map((i) => (i === Infinity ? 'INF' : i))
    .slice(1)
    .join('\n')
);
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

[상세 구현 방법](https://gyyeom.tistory.com/117)

예제 [백준 플로이드](https://www.acmicpc.net/problem/11404)

1. 문제
   > n(2 ≤ n ≤ 100)개의 도시가 있다.<br> 그리고 한 도시에서 출발하여 다른 도시에 도착하는 m(1 ≤ m ≤ 100,000)개의 버스가 있다. <br>각 버스는 한 번 사용할 때 필요한 비용이 있다.<br>
   > 모든 도시의 쌍 (A, B)에 대해서 도시 A에서 B로 가는데 필요한 비용의 최솟값을 구하는 프로그램을 작성하시오.
2. 입력
   > 첫째 줄에 도시의 개수 n이 주어지고 둘째 줄에는 버스의 개수 m이 주어진다.<br> 그리고 셋째 줄부터 m+2줄까지 다음과 같은 버스의 정보가 주어진다. <br>먼저 처음에는 그 버스의 출발 도시의 번호가 주어진다. <br>버스의 정보는 버스의 시작 도시 a, 도착 도시 b, 한 번 타는데 필요한 비용 c로 이루어져 있다. <br>시작 도시와 도착 도시가 같은 경우는 없다.<br> 비용은 100,000보다 작거나 같은 자연수이다.<br>
   > 시작 도시와 도착 도시를 연결하는 노선은 하나가 아닐 수 있다.
3. 출력

   > n개의 줄을 출력해야 한다.<br> i번째 줄에 출력하는 j번째 숫자는 도시 i에서 j로 가는데 필요한 최소 비용이다.<br> 만약, i에서 j로 갈 수 없는 경우에는 그 자리에 0을 출력한다.<br>

4. 예제 입력1

   > 5<br>
   > 14<br>
   > 1 2 2<br>
   > 1 3 3<br>
   > 1 4 1<br>
   > 1 5 10<br>
   > 2 4 2<br>
   > 3 4 1<br>
   > 3 5 1<br>
   > 4 5 3<br>
   > 3 5 10<br>
   > 3 1 8<br>
   > 1 4 2<br>
   > 5 1 7<br>
   > 3 4 2<br>
   > 5 2 4v

5. 예제 출력
   > 0 2 3 1 4<br>
   > 12 0 15 2 5<br>
   > 8 5 0 1 1<br>
   > 10 7 13 0 3<br>
   > 7 4 10 6 0<br>

[풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C-javascript)

```js
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, ...arr] = input;
const busInfo = arr.map((a) => a.split(' ').map(Number));
const dist = Array.from({ length: +n + 1 }, () =>
  Array.from({ length: +n + 1 }, () => Infinity)
);

busInfo.forEach(
  (bus) => (dist[bus[0]][bus[1]] = Math.min(bus[2], dist[bus[0]][bus[1]]))
);

for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

for (let i = 1; i < +n + 1; i++) {
  for (let j = 1; j < +n + 1; j++) {
    if (dist[i][j] === Infinity) dist[i][j] = 0;
  }
}

dist.slice(1).map((t) => {
  console.log(t.slice(1).join(' '));
});
```

✅ 참고자료<br>
[다익스트라 알고리즘](https://youngju-js.tistory.com/5)<br>
[다익스트라 & 플로이드 워셜 구현](https://gyyeom.tistory.com/117)<br>
[플로이드 워셜 알고리즘](https://youngju-js.tistory.com/8?category=1040168)<br>
[백준 다익스트라 풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C-javascript)
[백준 플로이드 풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-11404-%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-javascript)
