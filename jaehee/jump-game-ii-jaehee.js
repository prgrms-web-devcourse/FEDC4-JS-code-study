/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const tries = Array.from({ length: nums.length }, () => Infinity);
  tries[0] = 0;
  nums.forEach((reach, idx) => {
    for (let i = 0; i <= reach; i++) {
      if (i + idx > nums.length - 1) break;
      tries[i + idx] = Math.min(tries[i + idx], tries[idx] + 1);
    }
  });
  return tries.at(-1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
가능한 범위 내에 최소 횟수를 갱신해나가는 방식으로 풀었습니다.
이것보다 좋은 방법이 있을텐데 생각이 들지만 떠오르지가 않네요.

2. 시간 복잡도 or 결과

Runtime
190 ms
Beats
22.92%
Memory
44.3 MB
Beats
39.21%

3. 기타 의견 

4. 참고 링크

*/
