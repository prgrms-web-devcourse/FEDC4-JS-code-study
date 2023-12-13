const converter = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function getDecimal(num, dec) {
  const nums = [];
  while (true) {
    const spare = num % dec;
    const body = Math.floor(num / dec);
    num = body;
    nums.push(converter[spare]);
    if (body < dec) {
      nums.push(converter[body]);
      break;
    }
  }

  const res = nums.reverse().join("");
  return res[0] === "0" ? res.slice(1) : res;
}

function solution(n, t, m, p) {
  if (m === p) p = 0;
  let answer = "";
  const st = [];
  let nowTurn = 0;
  let currentNumber = -1;
  while (st.length < t) {
    currentNumber++;
    const currentValue = getDecimal(currentNumber, n);
    currentValue.split("").forEach((c) => {
      nowTurn++;
      if (nowTurn % m === p && st.length < t) {
        st.push(c);
      }
    });
  }

  return st.join("");
}

/*
1. 알고리즘 or 자료구조 선택 이유
수학, 구현

2. 시간 복잡도 or 결과

테스트 1 〉	통과 (0.11ms, 33.6MB)
테스트 2 〉	통과 (0.26ms, 33.5MB)
테스트 3 〉	통과 (0.23ms, 33.4MB)
테스트 4 〉	통과 (0.24ms, 33.5MB)
테스트 5 〉	통과 (0.36ms, 33.6MB)
테스트 6 〉	통과 (0.29ms, 33.5MB)
테스트 7 〉	통과 (0.38ms, 33.5MB)
테스트 8 〉	통과 (0.37ms, 33.6MB)
테스트 9 〉	통과 (0.56ms, 33.5MB)
테스트 10 〉	통과 (0.36ms, 33.5MB)
테스트 11 〉	통과 (0.35ms, 33.5MB)
테스트 12 〉	통과 (0.38ms, 33.6MB)
테스트 13 〉	통과 (0.40ms, 33.6MB)
테스트 14 〉	통과 (17.20ms, 37.4MB)
테스트 15 〉	통과 (17.10ms, 37.5MB)
테스트 16 〉	통과 (23.06ms, 37.4MB)
테스트 17 〉	통과 (1.10ms, 33.8MB)
테스트 18 〉	통과 (2.14ms, 36.3MB)
테스트 19 〉	통과 (0.59ms, 33.6MB)
테스트 20 〉	통과 (1.52ms, 34.1MB)
테스트 21 〉	통과 (6.57ms, 37.2MB)
테스트 22 〉	통과 (3.65ms, 36.9MB)
테스트 23 〉	통과 (11.55ms, 37.5MB)
테스트 24 〉	통과 (7.94ms, 37.1MB)
테스트 25 〉	통과 (6.49ms, 37.3MB)
테스트 26 〉	통과 (5.06ms, 36.9MB)

3. 기타 의견 

4. 참고 링크

*/
