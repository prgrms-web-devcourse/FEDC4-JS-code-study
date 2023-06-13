class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const returnNode = this.head;
    this.head = returnNode.next;
    return returnNode.value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

/*
1. 알고리즘 or 자료구조 선택 이유
강의에서 알려준 모범답안입니다.

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.27ms, 33.6MB)
테스트 2 〉	통과 (0.43ms, 33.5MB)
테스트 3 〉	통과 (0.30ms, 33.7MB)
테스트 4 〉	통과 (0.28ms, 33.7MB)
테스트 5 〉	통과 (0.14ms, 33.6MB)
테스트 6 〉	통과 (0.29ms, 33.6MB)
테스트 7 〉	통과 (0.28ms, 33.6MB)
테스트 8 〉	통과 (0.38ms, 33.5MB)
테스트 9 〉	통과 (0.26ms, 33.7MB)
테스트 10 〉	통과 (0.30ms, 33.6MB)
테스트 11 〉	통과 (0.39ms, 33.5MB)
테스트 12 〉	통과 (0.26ms, 33.6MB)
테스트 13 〉	통과 (0.54ms, 33.6MB)
테스트 14 〉	통과 (0.17ms, 33.6MB)
테스트 15 〉	통과 (0.26ms, 33.5MB)
테스트 16 〉	통과 (0.32ms, 33.5MB)
테스트 17 〉	통과 (0.66ms, 33.5MB)
테스트 18 〉	통과 (0.41ms, 33.7MB)
테스트 19 〉	통과 (0.37ms, 33.5MB)
테스트 20 〉	통과 (0.28ms, 33.6MB)

3. 기타 의견 

4. 참고 링크

*/
