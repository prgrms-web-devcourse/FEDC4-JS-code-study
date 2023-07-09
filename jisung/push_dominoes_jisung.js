/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
  while (true) {
    const changed = dominoes
      .split("R.L")
      .map((i) => i.replaceAll(".L", "LL").replaceAll("R.", "RR"))
      .join("R.L");

    if (changed === dominoes) break;
    dominoes = changed;
  }

  return dominoes;
};

/*
1. 알고리즘 or 자료구조 선택 이유
DP인가 ,,?

2. 시간 복잡도 or 결과
runtime: 334 ms / beats 36.74%
memory: 57.6 mb / beats 91.84%

3. 기타 의견
문제 풀고 나서 다른 사람들의 풀이를 보니까,
문제에서 의도한 DP 풀이와는 다르게 푼 것 같습니다 ㅠ

문제에서 의도한 DP: 'L' or 'R' 한 쌍 기준으로 쪼개서 풀이
내가 푼 DP: 시간 초마다 쪼개고 ( ... ) 'L.R' 기준으로 쪼개서 풀이

제가 푼 방식은 두 개의 기준으로 쪼개서 시간복잡도가 더 걸릴 수 밖에 없었네용 ..
하지만 가독성은 더 좋으니(?) 합리화를 해보겠습니다.

4. 참고 링크
*/
