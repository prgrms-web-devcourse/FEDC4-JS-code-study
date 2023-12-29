/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dp = Array.from({ length: nums.length + 1 }, () => false);
  const checked = Array.from({ length: nums.length + 1 }, () => false);
  const st = [0];

  while (st.length !== 0) {
    const nowIdx = st.pop();

    for (let i = 0; i <= nums[nowIdx]; i++) {
      if (nowIdx + i === nums.length - 1) return true;
      dp[nowIdx + i] = true;
      if (!checked[nowIdx + i]) st.push(nowIdx + i);
      checked[nowIdx + i] = true;
    }
  }

  return dp[nums.length - 1];
};

/*
1. 알고리즘 or 자료구조 선택 이유
dp

그리디로 풀어야 했는데 dp로 풀어서 효율이 안 좋다.

2. 시간 복잡도 or 결과
Runtime
451
ms
Beats
13.56%
of users with JavaScript
Memory
49.66
MB
Beats
10.33%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
