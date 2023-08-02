/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const counts = {};
  let hit = false;
  let res = [0, s.length];
  let wordsCount = t.length;

  t.split("").forEach((v) => {
    counts[v] ? (counts[v] += 1) : (counts[v] = 1);
  });

  let start = (end = 0);

  while (end < s.length) {
    // console.log(counts, start, end, s[end])
    if (counts[s[end]] !== undefined) {
      if (counts[s[end]] > 0) {
        wordsCount--;
      }
      counts[s[end]]--;
    }

    while (wordsCount === 0 && start <= end) {
      hit = true;
      // console.log('hit', s[start], start, end)
      if (res[1] - res[0] > end - start) {
        res = [start, end];
      }
      if (counts[s[start]] !== undefined) {
        if (counts[s[start]] === 0) {
          wordsCount++;
        }
        counts[s[start]]++;
      }
      start++;
    }
    end++;
  }

  return hit ? s.slice(res[0], res[1] + 1) : "";
};

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
Runtime
75 ms
Beats
97.33%
Memory
47.6 MB
Beats
42.37%

3. 기타 의견 

4. 참고 링크

*/
