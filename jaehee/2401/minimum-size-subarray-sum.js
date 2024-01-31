/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 1;
  let answer = Infinity;
  let sum = nums[left] + nums[right];
  if (nums[left] >= target) return 1;

  while (left < nums.length && right < nums.length) {
    if (sum >= target) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left];
      if (left === right) return 1;
      left++;
    } else {
      right++;
      sum += nums[right];
    }
  }

  return answer === Infinity ? 0 : answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
슬라이딩 윈도우

2. 시간 복잡도 or 결과
O(n)

Runtime
57
ms
Beats
71.18%
of users with JavaScript
Memory
46.27
MB
Beats
39.29%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
