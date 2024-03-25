function solution(k, ranges) {
  let answer = [];

  const ys = [k];

  while (k !== 1) {
    if (k % 2 === 0) {
      k /= 2;
    } else {
      k = 3 * k + 1;
    }
    ys.push(k);
  }

  const records = [0];

  for (let i = 1; i < ys.length; i++) {
    records.push((ys[i - 1] + ys[i]) / 2 + records[i - 1]);
  }

  for (range of ranges) {
    let [a, b] = range;
    if (ys.length + b - 1 < a) {
      answer.push(-1);
      continue;
    }
    answer.push(records[ys.length + b - 1] - records[a]);
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
수학

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.61ms, 33.7MB)
테스트 3 〉	통과 (5.96ms, 40.8MB)
테스트 4 〉	통과 (0.76ms, 34.4MB)
테스트 5 〉	통과 (0.51ms, 33.9MB)
테스트 6 〉	통과 (1.09ms, 37.9MB)
테스트 7 〉	통과 (6.73ms, 40.6MB)
테스트 8 〉	통과 (9.80ms, 41.1MB)
테스트 9 〉	통과 (0.44ms, 33.6MB)
테스트 10 〉	통과 (1.75ms, 38MB)

3. 기타 의견 

4. 참고 링크

*/
