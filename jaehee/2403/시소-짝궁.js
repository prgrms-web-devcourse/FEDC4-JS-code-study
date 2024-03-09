function solution(weights) {
  let answer = 0;
  const record = new Map();
  const fars = [2, 3, 4];

  const targets = new Map();

  for (weight of weights) {
    targets.has(weight)
      ? targets.set(weight, targets.get(weight) + 1)
      : targets.set(weight, 1);
    fars.forEach((far) => {
      record.has(far * weight)
        ? record.set(far * weight, record.get(far * weight) + 1)
        : record.set(far * weight, 1);
    });
  }

  for (let key of record.keys()) {
    const cases = record.get(key);
    if (cases >= 2) answer += (cases * (cases - 1)) / 2;
  }

  let minus = 0;
  for (let key of targets.keys()) {
    const num = targets.get(key);
    if (num >= 2) {
      minus += num * (num - 1);
    }
  }

  return answer - minus;
}

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.23ms, 33.4MB)
테스트 4 〉	통과 (6.55ms, 37.9MB)
테스트 5 〉	통과 (12.22ms, 38.7MB)
테스트 6 〉	통과 (13.31ms, 39.6MB)
테스트 7 〉	통과 (15.11ms, 39.8MB)
테스트 8 〉	통과 (17.70ms, 40.3MB)
테스트 9 〉	통과 (21.50ms, 39.2MB)
테스트 10 〉	통과 (27.16ms, 39.7MB)
테스트 11 〉	통과 (24.73ms, 39.6MB)
테스트 12 〉	통과 (15.30ms, 40MB)
테스트 13 〉	통과 (17.15ms, 39.8MB)
테스트 14 〉	통과 (17.59ms, 39.7MB)
테스트 15 〉	통과 (16.89ms, 39.8MB)
테스트 16 〉	통과 (0.11ms, 33.5MB)
테스트 17 〉	통과 (0.12ms, 33.5MB)

3. 기타 의견 

4. 참고 링크

*/
