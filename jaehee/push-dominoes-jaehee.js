/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const leng = dominoes.length;

  while (true) {
    let temp = dominoes;
    const res = dominoes.split("");

    for (let i = 0; i < leng; i++) {
      if (
        dominoes[i - 1] === "R" &&
        dominoes[i + 1] !== "L" &&
        dominoes[i] === "."
      ) {
        res[i] = "R";
      } else if (
        dominoes[i - 1] !== "R" &&
        dominoes[i + 1] === "L" &&
        dominoes[i] === "."
      ) {
        res[i] = "L";
      } else {
        res[i] = dominoes[i];
      }
    }

    dominoes = res.join("");

    if (temp === dominoes) break;
    temp = dominoes;
  }

  return dominoes;
};

/*
1. 알고리즘 or 자료구조 선택 이유
이전 결과와 다른 경우에만 다시 반복하는 방식으로 풀었습니다.
DP를 활용해 푼게 아닌 것 같은 느낌...?

2. 시간 복잡도 or 결과

Runtime
1359 ms
Beats
24.49%
Memory
88.3 MB
Beats
20.41%

3. 기타 의견 

4. 참고 링크

*/
