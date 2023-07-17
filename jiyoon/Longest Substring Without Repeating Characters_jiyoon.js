// 2023.07.15 22:20~23:33
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let str = '';
  let i = 0; // 문자 인덱스
  let sIndex = 0; // 슬라이스 인덱스
  while (i < s.length) {
    if (!str.includes(s[i])) {
      str += s[i];
      i++;
    } else {
      map.set(str, str.length);
      str = '';
      sIndex++;
      i = sIndex;
    }
  }
  // set 해주는게 else에 있어서 if문의 마지막 str 처리 해주기
  map.set(str, str.length);

  // 가장 긴 문자 길이 구하기
  let longest = 0;
  for (const value of map.values()) {
    longest = longest < value ? value : longest;
  }
  return longest;
};
/*
1. 알고리즘 or 자료구조 선택 이유
map 사용

2. 시간 복잡도 or 결과
O(n^2) - while & includes
효율이..
Runtime - 259ms 22.19%
Memory - 49.4MB 18.91%

3. 기타 의견
map을 억지로 사용하려고 했는데, 안 사용하고도 풀 수 있을 것 같아요.
아니면 해시를 좀 더 잘 쓸 수 있는 풀이가 있을 것 같네요!
뭔가 어렵게 푼 거 같기도?

4. 참고 링크

*/
