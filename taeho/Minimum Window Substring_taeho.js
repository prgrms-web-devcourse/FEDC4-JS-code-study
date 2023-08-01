/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  if (s === t) return s;

  const wanted = {};

  for (const want of t) {
    wanted[want] = (wanted[want] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let wantedLen = Object.keys(wanted).length;
  let str = "";

  while (right < s.length) {
    const rightChar = s[right];
    wanted[rightChar]--;
    if (wanted[rightChar] === 0) wantedLen--;
    while (wantedLen === 0) {
      if (!str || str.length > right - left + 1) {
        // 없거나 현재 str보다 작을때만
        str = s.slice(left, right + 1);
      }

      const leftChar = s[left];

      if (wanted[leftChar] === 0) wantedLen++;

      wanted[leftChar]++;
      left++;
    }
    right++;
  }
  return str;
};

/*
1. 알고리즘 or 자료구조 선택 이유
이전 답을 참고했습니다.. left를 저런식으로 구하는게 이해가 쉽지 않네요.. 

2. 시간 복잡도 or 결과
Runtime 74 ms Beats 97.79%
Memory 45.3 MB Beats 79.47%
*/
