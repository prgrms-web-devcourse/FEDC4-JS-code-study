//2023.07.18 13:25~14:08
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
  let freq = new Array(k).fill(0);
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remainder = sum % k;
    // 항상 양수로 유지
    if (remainder < 0) remainder += k;
    cnt += freq[remainder];
    freq[remainder]++;
  }
  return cnt;
};
/*
1. 알고리즘 or 자료구조 선택 이유
구현, 모듈러 연산 + 누적합

2. 시간 복잡도 or 결과
O(n)
Runtime - 79ms 75.56%
Memory - 22.85MB 100%

3. 기타 의견
제가 푼 방식은 시간 초과가 발생합니다.
이 문제 같은 경우는 모듈러 연산과 누적합을 이용해서 ,
시간복잡도를 O(n)까지 줄여서 푸는 문제였네요!

// 타임 초과된 풀이..
const subarraysDivByK = function(nums, k) {
    let cnt = 0;
    for(let i = 1; i <= nums.length; i++){
        for(let j = 0; j < nums.length - i + 1; j++){
           const values = nums.slice(j, j+i);
           const sum = values.reduce((acc,cur) => acc+cur);
           console.log(values, sum);
           if(sum % k === 0){
               cnt++;
           }
        }
    }
    return cnt;
};

4. 참고 링크
모듈러 연산과 누적합: https://cocoon1787.tistory.com/396
https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/413234/whiteboard-explanation/
*/
