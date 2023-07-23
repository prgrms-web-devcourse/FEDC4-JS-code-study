function solution(s) {
  let answer = Infinity;
  let i = 1;
  if (s.length === 1) return 1;
  while (i <= s.length / 2) {
    let temp = "";
    let res = 0;
    let flag = 1;
    for (let j = 0; j < s.length / i; j++) {
      let now = s.slice(i * j, i * (j + 1));
      if (now.length !== i) {
        res += now.length;
        break;
      }
      if (temp === now) {
        flag += 1;
      } else {
        res += i;
        if (flag !== 1) res += (flag + "").length;
        flag = 1;
        temp = now;
      }
    }
    if (flag !== 1) res += (flag + "").length;
    i++;
    answer = Math.min(answer, res);
  }

  return Math.min(answer, s.length);
}

/*
1. 알고리즘 or 자료구조 선택 이유
단순히 문제 조건대로 구현했습니다.

2. 시간 복잡도 or 결과
O(N^2) 

3. 기타 의견 
뭔가 교육과정 중에 있었나요? 풀어본 것 같기도 하고...

4. 참고 링크

*/
