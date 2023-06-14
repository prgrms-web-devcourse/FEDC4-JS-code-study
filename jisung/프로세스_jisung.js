"use strict";

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  // { queue : [], front : 0, rear : 0 }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    let value = this.queue[this.front];
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

function solution(arr, location) {
  // 어떤 값이 나가야하는지, 비교해주기 위함!
  let count = 0;
  let max = [...arr].sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
  });

  // 큐 생성 후 초기화!
  let queue = new Queue();
  for (let i = 0; i < arr.length; i++) {
    queue.enqueue([arr[i], i]);
  }

  while (queue.size() > 0) {
    if (queue.peek()[0] < max[count]) {
      // 못 나감!
      queue.enqueue(queue.dequeue());
    } else {
      // 나갈 수 있는데...!
      let value = queue.dequeue();
      if (value[1] === location) {
        // 내가 나갈 차례라면...!
        count += 1;
        return count;
      } else {
        // 내 차례가 아니라면..!
        count += 1;
      }
    }
  }

  return count;
}

/*
1. 알고리즘 or 자료구조 선택
- 배열 안에는 중요도가 담겨있고, 앞으로 나가는 기능을 구현하면 된다. 
- 근데 배열에서 앞으로 나가는 기능은 shift함수를 써야하는데, 배열에선 앞 공간을 뒷 원소들이 싹 채워줘야하기 때문에 ,
- 시간복잡도 상, 배열은 옳지 않다. 

- 그래서 앞으로 나가는 자료구조인 queue를 사용했다. 


2. 코드 설명
- 대표적인 큐의 문제이다. 
- 만약 최댓값이 아니라면 디큐된 값이 다시 엔큐 돼야하고, 
- 최댓값이라면, 디큐를 시켜주면 되는데 ❗️조건이 하나가 있다❗️
- 🔴 location번째 원소가 몇 번째로 나가는지 구해줘야하는 문제이다 🔴
- 그러기 위해선, 다른 원소들도 몇 번째로 나가는지 세 줘야해서 count변수를 사용했다.  


3. 시간 복잡도: O(n logn)
- for, while은 O(N)이 걸리지만, 정렬이 NlogN이 걸리기 때문이다. 

4. 참고 사이트
- 참고하지는 않았습니다!
 */
