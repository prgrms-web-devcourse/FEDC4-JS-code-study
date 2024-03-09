function solution(sequence) {
  let answer = -Infinity;
  if (sequence.length === 1) return Math.max(sequence[0], -sequence[0]);

  const p1 = Array.from({ length: sequence.length }, (_v, i) =>
    i % 2 === 0 ? -1 : 1
  );
  const p2 = Array.from({ length: sequence.length }, (_v, i) =>
    i % 2 === 0 ? 1 : -1
  );

  const seq1 = sequence.map((v, i) => v * p1[i]);
  const seq2 = sequence.map((v, i) => v * p2[i]);

  for (let i = 1; i < sequence.length; i++) {
    seq1[i] = Math.max(seq1[i], seq1[i] + seq1[i - 1]);
    seq2[i] = Math.max(seq2[i], seq2[i] + seq2[i - 1]);
    answer = Math.max(seq1[i], seq2[i], answer);
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
kadane

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.12ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.22ms, 33.4MB)
테스트 4 〉	통과 (0.23ms, 33.4MB)
테스트 5 〉	통과 (0.37ms, 33.6MB)
테스트 6 〉	통과 (0.32ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.4MB)
테스트 8 〉	통과 (0.52ms, 33.5MB)
테스트 9 〉	통과 (1.26ms, 33.7MB)
테스트 10 〉	통과 (5.97ms, 34.6MB)
테스트 11 〉	통과 (6.89ms, 36.6MB)
테스트 12 〉	통과 (33.32ms, 43.4MB)
테스트 13 〉	통과 (44.60ms, 42.1MB)
테스트 14 〉	통과 (29.75ms, 42.5MB)
테스트 15 〉	통과 (29.20ms, 41.4MB)
테스트 16 〉	통과 (26.80ms, 42.9MB)
테스트 17 〉	통과 (169.85ms, 65.4MB)
테스트 18 〉	통과 (106.67ms, 73.1MB)
테스트 19 〉	통과 (140.38ms, 65.6MB)
테스트 20 〉	통과 (130.53ms, 65.3MB)

3. 기타 의견 
Math.max에 인자 개수 제한으로 런타임 에러가 났었다.

4. 참고 링크

*/
