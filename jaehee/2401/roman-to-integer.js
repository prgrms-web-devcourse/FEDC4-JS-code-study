/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const order = ["I", "V", "X", "L", "C", "D", "M"];
  const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let temp = s[0];
  let sum = nums[temp];

  if (s.length === 0) return nums[s];

  for (let i = 1; i < s.length; i++) {
    const now = s[i];
    if (order.indexOf(now) > order.indexOf(temp)) {
      sum += nums[now] - 2 * nums[temp];
    } else {
      sum += nums[now];
    }
    temp = now;
  }

  return sum;
};

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
O(n)

Runtime
104
ms
Beats
75.01%
of users with JavaScript
Memory
46.64
MB
Beats
81.49%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
