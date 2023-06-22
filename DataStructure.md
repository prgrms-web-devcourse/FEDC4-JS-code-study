# `자료구조 (Data Structure)`

## 종류

- 선형 자료구조 : 자료가 1자로 순차적으로 놓여져있는 자료구조(`1개의 자료뒤엔 1개밖에 오지 못 함`)
  - Array : [1, 2, 3, 4, 5]
  - linked List
  - stack
  - queue
- 비선형 자료구조 : 1개의 자료뒤에 `여러개가 올 수 있는` 자료구조를 뜻한다. (2진트리 경우 2개 아니면 여러 개!)
  - 그래프
    - 예를들면 저희 숫자조합해서 더할 때 1뒤에 +3도 가능하고 -3도 가능했던 문제 기억하시나요??
  - 트리

### `stack`

![img](data:image/png;base64,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)

> 정의 : 배열을 세로로 세운 자료구조

- 특징

  - 프링글스 통 보면 위에서만 과자를 꺼내먹을 수 있듯이, `위에서만` 자료를 넣고(`push`) 빼고(`pop`) 할 수 있습니다.

  - 나중에 넣은 과자를 가장 먼저 꺼내먹듯이, `가장 나중에 들어온 자료가 먼저 나갈 수 있습니다`

  - `끝에서만 작업이 이루어져서`, 중간, 처음은 접근할 수 `없습니다`

### `queue`

![img](https://velog.velcdn.com/images%2Fawesomeo184%2Fpost%2Fc1d73c47-1103-4c47-94cd-8563e85b6542%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-10-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.25.31.png)

> 정의 : 배열은 배열인데, 앞에서만 작업이 이루어지는 자료구조

- 특징

  - 스택과는 반대로 `먼저 들어온 순서대로 나가게 됩니다`
  - 스택과는 다르게, 자료가 들어오는 곳(`rear`)과 나가는 곳(`front`)가 다릅니다. (`앞문, 뒷문`이라고 생각하시면 편합니다!)

  - 마찬가지로 `중간, 처음은 접근할 수 없습니다`

### `Graph`

> 정의 : 연결되어 있는 자료간의 관계를 설명하는 자료구조(여러개 연결 가능 => `비선형 구조이기 때문입니다`)

- 특징

  - 선형 자료구조와는 다르게, `여러개의 자료와 연결될 수 있습니다` -`노드는 지역`, `간선은 지역을 잇는 길`로 많이 사용됩니다.

- ## `그래프 용어(❗️중요❗️)`
  ![img](https://i.namu.wiki/i/8pViDtKiYxEmcz1zj2WHZEpLHeu4q4n1bAjOOTvA4rLde3d-miR4lbCeFRjhzuTV1SLW5vFdg81Q6vb6fm1I9Q.webp)
- 트리 vs 그래프
  ![img](https://blog.kakaocdn.net/dn/swgoD/btq6AQZE8z3/q1KSaLJ3gFrLKw0xLqG9U0/img.png)

- ## `그래프 알고리즘`

  > 그래프는 자료가 여러개와 연결될 수 있기 때문에, 어떤 자료와 연결됐는지 알기 위해서 우리가 배열에서 for문을 돌듯이, 완전 탐색을 해야합니다!

  - `DFS`(Depth First Search)
    - 그래프에서 깊이를 우선적으로 탐색하는 알고리즘
    - 그래서 가장 가까운 곳 순서대로 탐방하는 방법은 아님
    - `깊어질수록 원점에서는 더 멀이지기 때문이다.`
  - `BFS`(Breadth First Search)
    - `너비`를 먼저 탐색하는 알고리즘
    - 즉, 시작점에서 가까운 곳들먼저 (가까운 순서대로) 탐방하는 방법
    - `최단거리를 찾기위한 알고리즘`
