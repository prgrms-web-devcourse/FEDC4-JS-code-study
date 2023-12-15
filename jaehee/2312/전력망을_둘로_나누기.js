function solution(n, wires) {
  let answer = n + 1;

  if (n === 2) return 0;

  function getConnectcount(wires) {
    const res = [];
    const maps = Array.from({ length: n + 1 }, () => []);
    const checked = Array.from({ length: n + 1 }, () => 0);
    wires.forEach(([v1, v2]) => {
      maps[v1].push(v2);
      maps[v2].push(v1);
    });

    for (let i = 1; i < n + 1; i++) {
      if (checked[i]) continue;
      const st = [i];
      let sum = 0;
      while (st.length !== 0) {
        const now = st.shift();
        sum++;
        checked[i] = 1;

        maps[now].forEach((v) => {
          if (checked[v]) {
          } else {
            st.push(v);
            checked[v] = 1;
          }
        });
      }
      res.push(sum);
    }
    console.log(res);

    return Math.abs(res[0] - res[1]);
  }

  for (let i = 0; i < wires.length; i++) {
    const wires_temp = [...wires];
    wires_temp.splice(i, 1);
    console.log(wires_temp);
    answer = Math.min(answer, getConnectcount(wires_temp));
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
완전탐색

2. 시간 복잡도 or 결과

정확성  테스트
테스트 1 〉	통과 (8.04ms, 39.1MB)
테스트 2 〉	통과 (8.46ms, 39MB)
테스트 3 〉	통과 (10.73ms, 39MB)
테스트 4 〉	통과 (10.82ms, 39.1MB)
테스트 5 〉	통과 (8.33ms, 39.1MB)
테스트 6 〉	통과 (0.43ms, 33.6MB)
테스트 7 〉	통과 (0.28ms, 33.5MB)
테스트 8 〉	통과 (0.78ms, 33.7MB)
테스트 9 〉	통과 (0.71ms, 33.6MB)
테스트 10 〉	통과 (8.09ms, 39MB)
테스트 11 〉	통과 (8.58ms, 39MB)
테스트 12 〉	통과 (8.43ms, 39.1MB)
테스트 13 〉	통과 (8.46ms, 39.1MB)

3. 기타 의견 

4. 참고 링크

*/
