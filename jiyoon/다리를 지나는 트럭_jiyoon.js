// 2023.06.25 18:00~18:44
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

function solution(bridge_length, weight, truck_weights) {
  const queue = new Queue();

  // 큐를 다리 길이만큼 선언
  for (let i = 0; i < bridge_length; i++) {
    queue.enqueue(0);
  }
  console.log(queue); // [ 0, 0 ]

  let time = 0;
  let bridgeWeight = 0; // 현재 다리에 올라가있는 트럭 무게
  while (queue.size()) {
    const frontTruck = queue.dequeue();
    bridgeWeight -= frontTruck;

    if (truck_weights.length) {
      // 현재 다리 위에 올라가 있는 트럭의 무게 + 다음에 올라갈 트럭의 무게 <= weight
      if (bridgeWeight + truck_weights[0] <= weight) {
        const nextTruck = truck_weights.shift();
        bridgeWeight += nextTruck;
        queue.enqueue(nextTruck);
      } else {
        // 초과하는 경우 0을 추가해서 못들어오게 함
        queue.enqueue(0);
      }
    }
    time++;
  }
  return time;
}
/*
1. 알고리즘 or 자료구조 선택 이유
트럭이 앞에서 부터 나가야 되므로 큐를 선택했습니다.

2. 시간 복잡도 or 결과
O(n) 

3. 기타 의견
이번에는 큐를 구현해서 풀어보았습니다.

4. 참고 링크

*/
