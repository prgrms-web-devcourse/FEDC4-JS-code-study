function solution(priorities, location) {
  let answer = 0;
  let q = [...priorities]; // 실제 동작할 큐
  let points = [...priorities].sort((a, b) => b - a); // 현재 가장 높은 우선순위를 알기 위한 배열

  while (q.length > 0) {
    const highest = points[0]; // 현재 가장 높은 우선순위
    const now = q.shift(); // 현재 작업

    if (now === highest && location === 0) {
      // 현재 작업이 가장 높은 우선순위이고, 정답에서 요구하는 작업이면
      answer += 1;
      break;
    } else if (now === highest && location !== 0) {
      // 현재 작업이 가장 높은 우선순위이고, 정답에서 요구하는 작업이 아니면
      location -= 1;
      answer += 1;
      points.shift();
    } else if (now !== highest && location === 0) {
      // 현재 작업이 가장 높은 우선순위가 아니고, 정답에서 요구하는 작업이면
      q.push(now);
      location = q.length - 1;
    } else if (now !== highest && location !== 0) {
      // 현재 작업이 가장 높은 우선순위가 아니고, 정답에서 요구하는 작업이 아니면
      location -= 1;
      q.push(now);
    }
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
수업 내용을 적용하지 않고, 예전 하던대로 풀었습니다.
queue를 사용하면서, location을 계속 갱신해주는 방식으로 풀었습니다.
하지만 shift() 메서드로 효율적이지 못한 가짜 큐와 같기 때문에 좋은 코드가 아니라고 생각합니다.

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.24ms, 33.6MB)
테스트 2 〉	통과 (0.23ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.5MB)
테스트 4 〉	통과 (0.16ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.24ms, 33.4MB)
테스트 7 〉	통과 (0.27ms, 33.4MB)
테스트 8 〉	통과 (0.32ms, 33.6MB)
테스트 9 〉	통과 (0.16ms, 33.5MB)
테스트 10 〉	통과 (0.30ms, 33.5MB)
테스트 11 〉	통과 (0.20ms, 33.4MB)
테스트 12 〉	통과 (0.24ms, 33.5MB)
테스트 13 〉	통과 (0.21ms, 33.5MB)
테스트 14 〉	통과 (0.07ms, 33.4MB)
테스트 15 〉	통과 (0.07ms, 33.5MB)
테스트 16 〉	통과 (0.16ms, 33.4MB)
테스트 17 〉	통과 (0.22ms, 33.4MB)
테스트 18 〉	통과 (0.23ms, 33.4MB)
테스트 19 〉	통과 (0.20ms, 33.4MB)
테스트 20 〉	통과 (0.18ms, 33.4MB)

사실 모범답안보다 더 빠른 결과가 나왔습니다.
아무래도 테스트 케이스가 적어서 그런걸까요...

3. 기타 의견 
조건문이 너무 많고, 직관적이지 않은 코드라고 생각합니다. 실수를 만들기 쉬운 코드라고 생각합니다.

4. 참고 링크
JS Queue에 대한 의견들...
https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
*/
