"use strict";

function solution(jobs) {
  var answer = 0;
  jobs.sort((a, b) => a[0] - b[0]); // 첫 작업은 가장 먼저오는 걸로
  const pq = []; // 시작이 가능한 일!
  let i = 0,
    time = 0;
  while (i < jobs.length || pq.length !== 0) {
    // 우선순위큐가 비어야 종료됨

    // 힙에 자료넣음!
    if (i < jobs.length && jobs[i][0] <= time) {
      pq.push(jobs[i++]);
      pq.sort((a, b) => a[1] - b[1]); // N logN
      continue;
    }
    // 작업이 없을경우!
    if (pq.length === 0) {
      time = jobs[i][0]; //첫 작업을 현재 시간으로 바꿔준다.
    } else {
      const [start, work] = pq.shift();
      answer += time + work - start;
      time += work;
    }
  }

  return parseInt(answer / jobs.length);
}
/*
1. 알고리즘 or 자료구조 선택
- 선택 : 최소 힙 
- 이유
  1. 가장 적게걸리는 일 부터 처리해줘야 하는데, 
  가장 작은 숫자를 빠르게 찾기위한 최소힙 자료구조를 사용했습니다. 


2. 코드 설명
- 우선 첫 작업은 가장 빨리 시작하는 작업부터 시작하고, 그 다음엔 되는 것들 중 가장 빠른 작업을 시작한다. 
- 그래서 작업이 비었는지, 비지 않았는지가 매우 중요하다. 

3. 시간 복잡도: O(n logn)
- for, while은 O(N)이 걸리지만, 정렬이 NlogN이 걸리기 때문이다. 
- n * nlogn하면 n^2logN => 길이가 500밖에 되지 않아서 시간복잡도를 많이 사용하였습니다. 

4. 참고 사이트
- 팀원 분 코드를 참고하였습니다. 
 */
