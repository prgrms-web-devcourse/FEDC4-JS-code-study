function solution(N, number) {
  const arr = new Array(9).fill(0).map((el) => new Set());
  for (let i = 1; i <= 8; i++) {
    arr[i].add('1'.repeat(i) * N);
    console.log(arr[i]); // Set(1) { 5 }, Set(1) { 55 } ...
    for (let j = 1; j < i; j++) {
      for (const first of arr[j]) {
        for (const second of arr[i - j]) {
          arr[i].add(first + second);
          arr[i].add(first - second);
          arr[i].add(first * second);
          arr[i].add(Math.floor(first / second));
        }
      }
    }
    if (arr[i].has(number)) return i;
  }
  return -1;
}

/*

1. 알고리즘 or 자료구조 선택 이유
dp
문제 이해는 했는데, 구현은 못했습니다..

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.85ms, 33.7MB)
테스트 2 〉	통과 (0.09ms, 33.6MB)
테스트 3 〉	통과 (0.10ms, 33.6MB)
테스트 4 〉	통과 (18.82ms, 39.7MB)
테스트 5 〉	통과 (13.85ms, 38.1MB)
테스트 6 〉	통과 (0.36ms, 33.4MB)
테스트 7 〉	통과 (0.37ms, 33.5MB)
테스트 8 〉	통과 (18.77ms, 39.6MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)

3. 기타 의견
N을 1번 사용하는 경우(5)를 cache에 저장
N을 2번 사용하는 경우(55, 5+5, 5*5, 5/5, 5-5)를 저장
N을 3번 사용하는 경우는 N을 1번 사용하는 경우와 N을 2번사용하는 경우를 사칙연산하여 저장
i는 N을 몇 번 사용했는지에 대한 변수
...

4. 참고 링크
https://velog.io/@numerok/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84-JavaScript
*/
