function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.unshift(0);
  rocks.push(distance);

  let left = 0;
  let right = distance;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let removedRocks = 0;
    let prevRock = 0;

    for (let i = 1; i < rocks.length; i++) {
      if (rocks[i] - prevRock < mid) {
        removedRocks++;
      } else {
        prevRock = rocks[i];
      }
    }

    if (removedRocks > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      result = Math.max(result, mid);
    }
  }

  return result;
}

/*
1. 알고리즘 or 자료구조 선택 이유
어느 정도 풀어보다가 감이 안잡혀서 구글링을 통해 도움을 받았습니다.. 이분탐색의 비교조건을 뭘로 잡아야할지 판단하는게 어렵네요.. 참고 링크대로 
하면 테스트케이스에서 오류가 나서 설명만 참고하면 이해가 쉬울 것 같습니다!!

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.29ms, 33.5MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.27ms, 33.4MB)
테스트 4 〉	통과 (7.43ms, 35.9MB)
테스트 5 〉	통과 (6.30ms, 35.9MB)
테스트 6 〉	통과 (28.48ms, 39.1MB)
테스트 7 〉	통과 (26.91ms, 39.4MB)
테스트 8 〉	통과 (27.08ms, 39.4MB)
테스트 9 〉	통과 (0.16ms, 33.6MB)
테스트 10 〉	통과 (0.29ms, 33.4MB)
테스트 11 〉	통과 (0.19ms, 33.4MB)
테스트 12 〉	통과 (0.18ms, 33.4MB)
테스트 13 〉	통과 (0.08ms, 33.4MB)
테스트 14 〉	통과 (0.18ms, 33.4MB)
테스트 15 〉	통과 (0.09ms, 33.4MB)
테스트 16 〉	통과 (0.19ms, 33.4MB)
테스트 17 〉	통과 (0.28ms, 33.4MB)
테스트 18 〉	통과 (0.24ms, 33.4MB)
테스트 19 〉	통과 (0.18ms, 33.6MB)
테스트 20 〉	통과 (23.41ms, 38.4MB)
테스트 21 〉	통과 (6.48ms, 36.9MB)
테스트 22 〉	통과 (32.43ms, 38.1MB)
테스트 23 〉	통과 (17.89ms, 37.7MB)
테스트 24 〉	통과 (31.90ms, 39.1MB)
테스트 25 〉	통과 (6.84ms, 36.8MB)
테스트 26 〉	통과 (14.54ms, 36.8MB)
테스트 27 〉	통과 (21.29ms, 37.5MB)
테스트 28 〉	통과 (4.90ms, 36.9MB)
테스트 29 〉	통과 (11.74ms, 36.2MB)
테스트 30 〉	통과 (15.61ms, 36.8MB)
테스트 31 〉	통과 (27.23ms, 38.8MB)
테스트 32 〉	통과 (4.89ms, 36.8MB)
테스트 33 〉	통과 (31.83ms, 37.4MB)
테스트 34 〉	통과 (33.66ms, 39.2MB)
테스트 35 〉	통과 (8.05ms, 36.8MB)
테스트 36 〉	통과 (16.08ms, 37.3MB)
테스트 37 〉	통과 (3.10ms, 36.6MB)
테스트 38 〉	통과 (7.43ms, 36.7MB)
테스트 39 〉	통과 (22.66ms, 38.3MB)

3. 참고링크
https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%A7%95%EA%B2%80%EB%8B%A4%EB%A6%AC-JS
*/
