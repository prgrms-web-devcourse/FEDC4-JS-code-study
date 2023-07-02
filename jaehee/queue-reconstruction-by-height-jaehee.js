/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const dp = Array.from(
    { length: Math.max(...people.map((v) => v[0])) },
    () => 0
  );
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  const res = [people[0]];

  for (let i = 0; i <= people[0][0]; i++) {
    dp[i] += 1;
  }

  for (let i = 1; i < people.length; i++) {
    const [height, order] = people[i];
    let curIdx = res.length;
    let notSmallers = dp[height];

    while (order < notSmallers) {
      if (res[curIdx - 1][0] >= height) {
        notSmallers -= 1;
      }
      curIdx -= 1;
    }

    res.splice(curIdx, 0, [height, order]);

    for (let j = 0; j <= height; j++) {
      dp[j] += 1;
    }
  }

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유


2. 시간 복잡도 or 결과
O(n^2) ?

Runtime
7654 ms
Beats
5.26%
Memory
141.4 MB
Beats
5.26%

-> 아주 끔찍한 효율이 나왔네요ㅋㅋ

3. 기타 의견 
생각해보니 이렇게 할 필요가 없어요.
이번 주 주제 DP인줄 알고 DP로 풀었는데, DP로 풀 필요가 없었네요.

4. 참고 링크

*/
