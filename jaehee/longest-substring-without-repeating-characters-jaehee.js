/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let record = 0;
  let start = 0;
  let end = 1;

  while (start < s.length) {
    let target = s.slice(start, end);
    // 중복이 없을 경우
    if (new Set(target.split("")).size === target.length) {
      record = Math.max(record, target.length); // 갱신
      if (end < s.length) {
        end += 1;
      } else {
        // 끝에 도달했으면 start를 옮겨준다.
        start += 1;
      }
    } else {
      // 중복이 있으면 start를 옮겨준다.
      start += 1;
    }
  }
  return record;
};

/*
1. 알고리즘 or 자료구조 선택 이유
해시는 아니고 start와 end를 두고 탐색했습니다.

2. 시간 복잡도 or 결과
O(n^2)

Runtime
389 ms
Beats
13.27%
Memory
48.4 MB
Beats
41.83%

3. 기타 의견 
해시에 저장해놓고 갱신해줬으면 시간복잡도를 줄일 수 있을 것 같습니다.
slice()를 매번 반복해서 효율이 좋지 못하네요.

4. 참고 링크

*/
