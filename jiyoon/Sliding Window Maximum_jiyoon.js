/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const q = []; // stores *indices*
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    // remove first element if it's outside the window
    if (q[0] === i - k) {
      q.shift();
    }
    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
};
/*
1. 알고리즘 or 자료구조 선택 이유
큐 사용

2. 시간 복잡도 or 결과
Runtime - 2852ms
Memory - 114.1MB
O(n^2)

3. 기타 의견
이렇게 풀었는데, 시간 초과 났습니다.
만약에 시간복잡도가 널널하다면 통과가 될까요?
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

const maxSlidingWindow = function(nums, k) {
  const stack = [];
  while(nums.length >= k){
      const temp = [];
      for(let i = 0; i < k; i++){
          temp.push(nums[i]);
      }
      nums.shift();
      stack.push(Math.max(...temp));
  }
  return stack;
};

4. 참고 링크
직접 풀지 못했습니다.
https://leetcode.com/problems/sliding-window-maximum/solutions/871317/clear-thinking-process-with-picture-brute-force-to-mono-deque-python-java-javascript/
*/
