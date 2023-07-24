/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let res = [0, s.length - 1];
  const t_count = {};
  let left_nums = t.length;
  t.split("").forEach((v) => {
    t_count[v] ? (t_count[v] += 1) : (t_count[v] = 1);
  });

  for (let l = 0, r = 0; r <= s.length; r++) {
    console.log(l, r);
    if (t_count[s[r]] && t_count[s[r]] > 0) {
      t_count[s[r]]--;
      left_nums--;
    }

    while (!left_nums) {
      if (r - l < res[1] - res[0]) {
        res = [l, r];
      }
      if (t_count[s[l]] !== undefined) {
        t_count[s[l]]++;
        left_nums++;
      }
      l++;
    }
  }

  return s.slice(res[0], res[1] + 1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
l, r 포인터를 두고 푸는 방식으로 생각했습니다.

2. 시간 복잡도 or 결과
실패

3. 기타 의견 
뭔가 추가적인 장치가 들어가야 할 것 같은데... 다시 풀어보겠습니다.

4. 참고 링크

*/
