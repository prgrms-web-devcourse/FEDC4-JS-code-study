/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const q = []
  const res = []

  for (let i = 0; i < nums.length; i++) {
    // 만약 현재 값이 큐에 저장되어 있는 최대값(의 인덱스)보다 클 경우 큐에서 pop
    while (q && nums[q.at(-1)] <= nums[i]) q.pop()
    q.push(i)

    // 검사 범위에 없다면 shift
    if (q[0] === i - k) q.shift()

    // 현재 가장 큰 값을 res 배열에 추가
    if (i >= k - 1) res.push(nums[q[0]])
  }

  return res
}

/*
1. 알고리즘 or 자료구조 선택 이유
덱(dequeue) 자료구조 사용했습니다.
실제 들어오는 배열의 값이 아닌, 해당 요소의 인덱스를 이용해 푸는 문제입니다.

2. 시간 복잡도 or 결과
runtime: 412 ms / beats 72.29%
memory: 91 mb / beats 65.88%

3. 기타 의견
처음에 시간 초과 계속 나서 베꼈습니다.

4. 참고 링크
https://leetcode.com/problems/sliding-window-maximum/solutions/871317/clear-thinking-process-with-picture-brute-force-to-mono-deque-python-java-javascript/
*/