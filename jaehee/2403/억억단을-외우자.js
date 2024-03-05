function solution(e, starts) {
  let answer = [];
  const sheet = {};
  const arr = Array.from({ length: e + 1 }, () => 2);
  arr[1] = 1;

  for (let i = 2; i < Math.floor(e / 2) + 1; i++) {
    for (let j = 2; j <= i; j++) {
      if (i * j > e) break;
      if (i === j) {
        arr[i * j]++;
      } else {
        arr[i * j] += 2;
      }
    }
  }
  const original = [...starts];
  starts.sort((a, b) => a - b);
  const st = [...starts];
  let nowMax = [0, 0];
  let now = st.pop();

  for (let i = e; i >= starts[0]; i--) {
    if (arr[i] >= nowMax[1]) {
      nowMax = [i, arr[i]];
    }
    if (i === now) {
      sheet[i] = nowMax[0];
      now = st.pop();
    }
  }

  return original.map((v) => sheet[v]);
}

/*
1. 알고리즘 or 자료구조 선택 이유
memoization

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.12ms, 33.4MB)
테스트 2 〉	통과 (0.28ms, 33.5MB)
테스트 3 〉	통과 (0.36ms, 33.4MB)
테스트 4 〉	통과 (0.38ms, 33.5MB)
테스트 5 〉	통과 (0.57ms, 33.4MB)
테스트 6 〉	통과 (34.49ms, 36.8MB)
테스트 7 〉	통과 (28.34ms, 36.9MB)
테스트 8 〉	통과 (26.08ms, 38.4MB)
테스트 9 〉	통과 (191.58ms, 53.1MB)
테스트 10 〉	통과 (1596.18ms, 101MB)

3. 기타 의견 

4. 참고 링크

*/
