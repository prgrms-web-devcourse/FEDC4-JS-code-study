function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => a[0] - b[0]);
  let minTemp = targets[0][0];
  let maxTemp = targets[0][1];

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];
    if (maxTemp <= start) {
      answer++;
      minTemp = start;
      maxTemp = end;
    } else {
      minTemp = Math.max(minTemp, start);
      maxTemp = Math.min(maxTemp, end);
    }
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유


2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.19ms, 33.6MB)
테스트 3 〉	통과 (0.34ms, 33.5MB)
테스트 4 〉	통과 (0.96ms, 33.9MB)
테스트 5 〉	통과 (8.60ms, 38.4MB)
테스트 6 〉	통과 (64.74ms, 54.4MB)
테스트 7 〉	통과 (535.47ms, 165MB)
테스트 8 〉	통과 (610.10ms, 166MB)
테스트 9 〉	통과 (27.80ms, 163MB)
테스트 10 〉	통과 (513.13ms, 140MB)
테스트 11 〉	통과 (0.06ms, 33.5MB)

3. 기타 의견 

4. 참고 링크

*/
