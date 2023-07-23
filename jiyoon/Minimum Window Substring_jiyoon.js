// 2023.07.23 13:20~14:28
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  // s: "ADOBECODEBANC"
  let min = ''; // 최소 길이의 부분 문자열
  let left = 0;
  let right = -1;
  const map = {}; // 각 t의 문자 개수

  t.split('').forEach((v) => {
    if (!map[v]) map[v] = 1;
    else map[v] = map[v] + 1;
  });
  // map = {'A': 2, 'B': 2, 'C': 1}

  let count = Object.keys(map).length; // 다른 문자 개수
  console.log(count);
  while (right <= s.length) {
    if (count !== 0) {
      right++;
      let current = s[right];
      // current가 map에 존재하면
      if (map[current] !== null) {
        map[current]--; // 해당 문자 개수 감소
      }
      if (map[current] === 0) count--;
    } else {
      // right가 5일때, t의 모든 문자가 포함(A,B,C)
      // map = { 'A': 1, 'B': 1, 'C': 0 }
      let current = s[left];
      // map에 포함되는 문자가 있으면 1증가
      if (map[current] !== null) map[current]++;
      // map에 포함되는 문자의 개수가 1이상이면 count증가해서 처음 if문으로
      if (map[current] > 0) count++;
      let temp = s.substring(left, right + 1); // ADOBEC
      if (min === '') min = temp;
      else min = min.length < temp.length ? min : temp;
      left++;
    }
  }
  return min;
};
/*
1. 알고리즘 or 자료구조 선택 이유
Object, slice window

2. 시간 복잡도 or 결과
O(s의 길이)
Runtime 87ms 87.70%
Memory 47MB 4.68%

3. 기타 의견
map으로 각 문자가 등장한 인덱스를 배열로 저장하고,
순열을 사용해서 모든 경우의 수를 구한뒤,
경우의 수에 맞게 인덱스를 오름차순으로 넣으면 되는식으로 접근하려고 했으나
막혀서 정답을 참고했습니다..!

const minWindow = function (s, t) {
  // 실패..
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], []);
  }
  // Map(3) { 'A' => [], 'B' => [], 'C' => [] }
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const item = map.get(s[i]);
      item.push(i);
      map.set(s[i], item);
    }
  }
  // Map(3) { 'A' => [ 0, 10 ], 'B' => [ 3, 9 ], 'C' => [ 5, 12 ] }
  const keyArr = t.split('');
  const output = [];
  const permutation = (permu, rests, output) => {
    if (rests.length === 0) {
      return output.push(permu);
    }
    rests.forEach((v, idx) => {
      const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
      permutation([...permu, v], rest, output);
    });
  };
  permutation([], keyArr, output);
  console.log(output);
};

4. 참고 링크
https://leetcode.com/problems/minimum-window-substring/solutions/411388/javascript-solution-w-detailed-comments/
*/
