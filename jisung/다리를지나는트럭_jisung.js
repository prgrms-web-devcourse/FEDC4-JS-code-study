"use strict";
class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
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

function solution(
  bridge_length = 2,
  weight = 10,
  truck_weights = [7, 4, 5, 6]
) {
  let passedTime = 0; // 지나간 시간.
  let sumOfWeights = 0; // 트럭 무게.

  const firstQueue = new Queue(); // 큐로 초기화!
  for (let i = 0; i < truck_weights.length; i++) {
    firstQueue.enqueue(truck_weights[i]);
  }

  const middleQueue = new Queue(); // 중간!
  for (let i = 0; i < bridge_length; i++) {
    middleQueue.enqueue(0);
  }

  // 첫 원소는 middle에 넣어주고 시작!
  let firstValue = firstQueue.peek();
  middleQueue.dequeue(); // 0을 빼주고,
  middleQueue.enqueue(firstQueue.dequeue()); // 다시 넣는다.
  passedTime += 1;
  sumOfWeights += firstValue;

  while (firstQueue.size() > 0) {
    passedTime += 1; // 일단 바로 1초 지남!
    const passedValue = firstQueue.peek(); // 이제 나올 차례!
    if (middleQueue.size() === bridge_length) {
      // 만약 2개가 꽉 찼을 경우!
      sumOfWeights -= middleQueue.dequeue();
    }
    if (sumOfWeights + passedValue > weight) {
      middleQueue.enqueue(0); // 계속 채워주기 위함 => ''대신 0으로
      continue;
    }
    // 만약 weight와 같거나 weight가 더 크다면...!
    // 넣을 수 있는 상황!
    let truck_weight = firstQueue.dequeue(); // 빼준다.
    middleQueue.enqueue(truck_weight); // 무게 추가!
    sumOfWeights += truck_weight;
  }

  passedTime += bridge_length; // 마지막에 무조건 더해줘야한다.
  return passedTime;
}
const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6]; // 큐로 바꿈!

console.log(solution());

/*
1. 알고리즘 or 자료구조 선택 이유
큐를 사용하여 풀었습니다.
계속해서 앞에 대기하는 트럭들이 먼저 나가야하기 때문입니다. 

2. 시간 복잡도 or 결과
- O(N)

3. 기타 의견 
- 큐를 풀면서 항상 느끼는건데, 경우의 수를 일단 if문으로 차분하게 정리하는 것이 정말 중요해보입니다. 

4. 참고 링크

*/
