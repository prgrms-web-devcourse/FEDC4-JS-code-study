function solution(k, tangerine) {
  let answer = 0;
  const sortList = [];

  const counts = new Map();

  for (let tanger of tangerine) {
    counts.has(tanger)
      ? counts.set(tanger, counts.get(tanger) + 1)
      : counts.set(tanger, 1);
  }

  for (let key of counts.keys()) {
    sortList.push(key);
  }

  sortList.sort((a, b) => counts.get(b) - counts.get(a));

  for (let i = 0; i < sortList.length; i++) {
    if (k < 1) break;
    answer++;
    k -= counts.get(sortList[i]);
  }

  return answer;
}
/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (11.59ms, 39.6MB)
테스트 2 〉	통과 (10.00ms, 39.6MB)
테스트 3 〉	통과 (10.79ms, 39.6MB)
테스트 4 〉	통과 (13.09ms, 39.5MB)
테스트 5 〉	통과 (11.62ms, 39.4MB)
테스트 6 〉	통과 (10.25ms, 39.4MB)
테스트 7 〉	통과 (10.59ms, 39.5MB)
테스트 8 〉	통과 (9.85ms, 39.5MB)
테스트 9 〉	통과 (10.22ms, 39.5MB)
테스트 10 〉	통과 (11.62ms, 39.5MB)
테스트 11 〉	통과 (0.23ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
테스트 13 〉	통과 (0.13ms, 33.4MB)
테스트 14 〉	통과 (0.11ms, 33.5MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.08ms, 33.6MB)
테스트 17 〉	통과 (0.10ms, 33.4MB)
테스트 18 〉	통과 (0.11ms, 33.4MB)
테스트 19 〉	통과 (0.08ms, 33.4MB)
테스트 20 〉	통과 (0.10ms, 33.5MB)
테스트 21 〉	통과 (0.54ms, 33.5MB)
테스트 22 〉	통과 (1.31ms, 33.6MB)
테스트 23 〉	통과 (0.85ms, 33.6MB)
테스트 24 〉	통과 (0.94ms, 33.7MB)
테스트 25 〉	통과 (13.74ms, 38.3MB)
테스트 26 〉	통과 (11.36ms, 40.2MB)
테스트 27 〉	통과 (44.29ms, 53.9MB)
테스트 28 〉	통과 (37.37ms, 46.2MB)
테스트 29 〉	통과 (53.87ms, 47.2MB)
테스트 30 〉	통과 (42.20ms, 53.8MB)
테스트 31 〉	통과 (8.92ms, 39.8MB)
테스트 32 〉	통과 (11.26ms, 40.3MB)
테스트 33 〉	통과 (51.31ms, 52.7MB)
테스트 34 〉	통과 (45.62ms, 47.6MB)

3. 기타 의견 

4. 참고 링크

*/
