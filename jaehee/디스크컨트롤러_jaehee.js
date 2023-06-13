function solution(jobs) {
  const readyJobs = []; // 준비된 작업을 담을 큐
  const n = jobs.length;
  let answer = 0;
  let time = 0; // 현재 시간

  jobs.sort((a, b) => a[0] - b[0]);

  // 대기중인 작업이 남아있거나, 준비된 작업이 남아있으면 반복
  while (jobs.length > 0 || readyJobs.length > 0) {
    // 대기중인 작업이 준비가 되었는지 검사
    while (jobs.length > 0) {
      const now = jobs[0];
      if (time >= now[0]) {
        readyJobs.push(jobs.shift());
      } else if (readyJobs.length === 0 && jobs.length > 0) {
        // 대기중인 작업이 있는데, 준비된 작업이 없으면 현재 시간을 대기중인 작업의 제일 빠른 시간으로 변경
        time = jobs[0][0];
      } else {
        // 대기중인 작업이 없으면 반복문 종료
        break;
      }
    }

    if (readyJobs.length > 0) {
      readyJobs.sort((a, b) => a[1] - b[1]);
      const currentJob = readyJobs.shift();
      time += currentJob[1]; // 현재 시간을 작업이 끝난 시간으로 변경
      answer += time - currentJob[0]; // 해당 작업이 요청부터 종료까지 걸린 시간을 더함
    }
  }

  return Math.floor(answer / n);
}

/*
1. 알고리즘 or 자료구조 선택 이유
현재 대기중인 작업이 많을 수록 평균 대기시간이 늘어나므로,
현재 처리할 수 있는 작업 중에서 가장 빨리 끝나는 작업을 선택하는 우선순위 큐와 비슷한 방식을 사용했습니다.
직접 Heap Queue를 구현하는 풀이도 있는 것 같은데, 이게 적합할지...

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (4.51ms, 36.5MB)
테스트 2 〉	통과 (3.75ms, 36.3MB)
테스트 3 〉	통과 (3.12ms, 36.1MB)
테스트 4 〉	통과 (3.22ms, 36MB)
테스트 5 〉	통과 (4.76ms, 36.3MB)
테스트 6 〉	통과 (0.19ms, 33.4MB)
테스트 7 〉	통과 (3.04ms, 36MB)
테스트 8 〉	통과 (2.53ms, 35.8MB)
테스트 9 〉	통과 (0.94ms, 33.6MB)
테스트 10 〉	통과 (8.12ms, 36.5MB)
테스트 11 〉	통과 (0.19ms, 33.5MB)
테스트 12 〉	통과 (0.17ms, 33.4MB)
테스트 13 〉	통과 (0.19ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.4MB)
테스트 15 〉	통과 (0.10ms, 33.5MB)
테스트 16 〉	통과 (0.13ms, 33.5MB)
테스트 17 〉	통과 (0.12ms, 33.4MB)
테스트 18 〉	통과 (0.08ms, 33.5MB)
테스트 19 〉	통과 (0.09ms, 33.6MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)

3. 기타 의견 

4. 참고 링크

*/
