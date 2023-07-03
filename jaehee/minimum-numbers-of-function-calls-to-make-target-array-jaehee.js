/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let count = 0;

  while (!nums.every((v) => v === 0)) {
    if (nums.every((v) => !(v % 2))) {
      for (let i = 0; i < nums.length; i++) {
        nums[i] /= 2;
      }
      count += 1;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
          nums[i] -= 1;
          count += 1;
        }
      }
    }
  }
  return count;
};

/*
1. 알고리즘 or 자료구조 선택 이유
최소한의 연산을 위해 2로 나누는 연산 조건을 먼저 체크하고, 그 외에는 1을 빼는 연산을 하는 그리디 알고리즘

2. 시간 복잡도 or 결과
O(n^2)

Runtime
110 ms
Beats
54.55%
Memory
46.2 MB
Beats
90.91%

3. 기타 의견 
forEach로 돌렸다가 for문으로 바꾸니까 결과가 좋아졌어요.

4. 참고 링크

*/
