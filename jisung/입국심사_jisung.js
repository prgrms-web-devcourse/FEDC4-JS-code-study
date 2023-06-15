function solution(n, times) {
  let low = 1;
  let high = Math.max(...times) * n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const people = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (people < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

/*
1. 알고리즘 or 자료구조 선택 이유
- 가장 먼저 정렬이 떠올랐고, 
- n의 크기가 무려 1억이나 되기 때문이었다. 
- 1억이란 얘기는 O(n)으로도 못 푼다는건데, o(n)보다 작은 알고리즘은 내 상식상 이분탐색이 유일했다. 

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.08ms, 33.6MB)
테스트 2 〉	통과 (0.28ms, 33.5MB)
테스트 3 〉	통과 (1.96ms, 35.8MB)
테스트 4 〉	통과 (75.51ms, 42.3MB)
테스트 5 〉	통과 (82.18ms, 41.9MB)
테스트 6 〉	통과 (68.59ms, 39.4MB)
테스트 7 〉	통과 (105.14ms, 42.3MB)
테스트 8 〉	통과 (95.92ms, 42.3MB)
테스트 9 〉	통과 (0.17ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0

3. 기타 의견 

4. 참고 링크

*/
