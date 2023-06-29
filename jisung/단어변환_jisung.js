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
function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  const queue = new Queue();

  if (!words.includes(target)) return 0; //words배열에 target이 없으면 0을 반환

  queue.enqueue([begin, answer]); //일단 queue에 [시작단어, 변경횟수]를 배열형태로 넣는다.

  while (queue.size() > 0) {
    let [v, cnt] = queue.dequeue(); //queue의 맨 왼쪽 값을 꺼낸다.

    if (v === target) {
      //꺼낸값의 v가 맞으면 cnt는 횟수 이므로 cnt를 return한다.
      return cnt;
    }

    words.forEach((word) => {
      let notEqual = 0; //다른갯수를 구하기위해 변수를 선언한다.

      if (visited.includes(word)) return; //방문했던 단어면 pass

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++; //word를 반복하면서 다른 알파벳의 갯수를 체크한다
      }

      if (notEqual === 1) {
        //만약 다른게 1개라면
        queue.enqueue([word, ++cnt]); //queue에 [단어, 횟수] 형태로 넣는다.
        //처음으로 따지면 hit -> hot이 되었을 때가 1이 된다.
        visited.push(word); //방문처리를 해준다.
      }
    });
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
- 하나의 알파벳을 변환시킬 수 있다는 말에 tree가 떠올랐습니다. 

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.29ms, 33.4MB)
테스트 3 〉	통과 (0.74ms, 33.4MB)
테스트 4 〉	통과 (0.36ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)


3. 기타 의견
- dfs와 bfs의 차이점을 정확하게는 아직 숙지하지 못 했습니다.

4. 참고 링크
  - https://velog.io/@ypyp66/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
5. 문제 이해

*/
