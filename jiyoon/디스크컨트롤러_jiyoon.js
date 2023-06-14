// 2023.06.13 16:05~18:12
function solution(jobs) {
  const count = jobs.length;
  const minHeap = new MinHeap();
  // 요청이 들어온 시점 순으로 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0; // 현재 시간을 저장할 변수, 1씩 증가
  let complete = 0; // 각 작업이 종료될 때의 완료 시점
  let total = 0; // 각 작업들이 소요된 시간의 누적합

  while (jobs.length || minHeap.size()) {
    // 각 job의 요청 시점이 현재 time과 일치하는 순간에 최소힙에 push
    while (jobs.length) {
      // 먼저 요청된 순으로 각 job의 요청 시점이 현재 time과 같다면
      if (jobs[0][0] === time) {
        // 해당 job을 최소힙에 넣고 원본 배열에서는 해당 job을 제거한다.
        minHeap.heappush(jobs.shift());
      } else break;
    }
    // 대기 리스트 역할을 하는 최소 힙에는 현재 time에 실행 될 수 있는 요청들을 가짐
    if (minHeap.size() && time >= complete) {
      // 최소힙에서 pop하면 최소힙에 의해 최소값을 가진 root값이 반환
      const task = minHeap.heappop();
      complete = task[1] + time; // 완료시간 갱신 = 해당 작업의 실행시간 + 현재 시간
      total += complete - task[0]; // 전체 소요 시간 += 갱신된 완료 시간 - 해당 작업이 요청된 시점
    }
    time++;
  }

  return Math.floor(total / count);
}
// 최소 힙
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx][1] < this.heap[curIdx][1] ||
      this.heap[rightIdx][1] < this.heap[curIdx][1]
    ) {
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;

      if (leftIdx >= this.size()) break;
    }

    return min;
  }
}
/*
1. 알고리즘 or 자료구조 선택 이유
작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법 
-> 정렬이 지속적으로 필요하다
-> 우선순위 큐 또는 힙 사용이 가능하다.
-> 우선순위 큐는 배열, 연결 리스트, 힙으로 구현이 가능한데 배열과 연결리스트를 구현하면 O(n)의 시간 복잡도가 발생할 수 있으므로 O(logn)의 시간복잡도를 가지는 힙으로 구현해보자!!
근데 느린 것 같습니다...

2. 시간 복잡도 or 결과
시간 복잡도: O(nlogn) 
sort: O(nlogn)
힙: O(logn)
테스트 1 〉	통과 (13.95ms, 37.1MB)
테스트 2 〉	통과 (18.60ms, 37.1MB)
테스트 3 〉	통과 (11.60ms, 36.9MB)
테스트 4 〉	통과 (11.42ms, 36.9MB)
테스트 5 〉	통과 (19.50ms, 37.2MB)
테스트 6 〉	통과 (1.35ms, 35.5MB)
테스트 7 〉	통과 (11.41ms, 36.8MB)
테스트 8 〉	통과 (10.72ms, 36.7MB)
테스트 9 〉	통과 (9.55ms, 36.7MB)
테스트 10 〉	통과 (12.31ms, 37.2MB)
테스트 11 〉	통과 (0.35ms, 33.3MB)
테스트 12 〉	통과 (0.56ms, 33.6MB)
테스트 13 〉	통과 (0.58ms, 33.4MB)
테스트 14 〉	통과 (0.31ms, 33.5MB)
테스트 15 〉	통과 (0.31ms, 33.6MB)
테스트 16 〉	통과 (0.30ms, 33.5MB)
테스트 17 〉	통과 (0.17ms, 33.4MB)
테스트 18 〉	통과 (0.20ms, 33.5MB)
테스트 19 〉	통과 (0.30ms, 33.4MB)
테스트 20 〉	통과 (0.26ms, 33.4MB)


3. 기타 의견
아직 문제를 보고 무슨 알고리즘과 자료구조를 사용해야 하는지 파악하는 게 부족한 것 같습니다.
또한 구현하기보다는 우선순위 큐와 힙에 대해 제대로 공부하고 학습했던 시간이였습니다.
나중에는 우선순위 큐나 힙의 개념을 제대로 알아서 구현할 줄 알도록 익혀야겠습니다.
혹시 코드가 이해 안 되시면 자세한 설명을 해드리겠습니다!

4. 참고 링크
힙: https://velog.io/@jiyoon2/2%EC%A3%BC%EC%B0%A8-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B03
힙2: https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP
코드 참고: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-JS

5. 문제 이해
1. 현재 실행 중인 요청이 없고, 해당 시점에서 가장 먼저 들어온 요청이 단 1개일 경우 해당 요청을 바로 수행한다.
2. 현재 실행 중인 요청이 있다면 현재 시간이 작업이 요청되는 시점이더라도 해당 요청은 실행하지 않고 대기리스트에 추가된다.
3. 실행 중인 요청이 끝났다면, 대기리스트에 존재하는 요청 중에 실행시간이 가장 짧은 요청부터 처리한다.
*/
