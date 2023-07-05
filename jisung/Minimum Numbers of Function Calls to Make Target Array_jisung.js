/**
 * @param {number[]} nums
 * @return {number}
 */
const checkNums = (nums) => {
  if (nums.every((n) => n === 0)) return "다0";
  if (nums.every((n) => n % 2 === 0)) return "다짝수";
};
const minOperations = function (nums) {
  let count = 0;
  while (100000000) {
    if (checkNums(nums) === "다0") {
      break;
    }

    // 어차피 위에 break로 나가기 때문에, else if라고 안 적어도 됨.
    if (checkNums(nums) === "다짝수") {
      // 전부 2로 나눠준다.
      for (let i = 0; i < nums.length; i++) {
        nums[i] /= 2;
      }
      count += 1;
    }

    // 만약 홀수가 하나라도 있다면
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1) {
        count += 1;
        nums[i] -= 1; // -1해줌.
      }
    }
  }
  return count;
};
/*
1. 그리디 
- 최소한으로 [0,0]에서 결과 배열안에 있는 숫자를 만드는 문제였습니다. 
- 하지만 딱히 그리디라는 생각은 하지 못 하였고, 단순한 구현문제...같았습니다. 

2. 시간 복잡도 or 결과
sincerity developer
Runtime
112 ms
Beats
54.55%
Memory
47.1 MB



3. 기타 의견
- 쉬운 그리디 문제였지만, 그리디보단 차라리 아무 생각없이 구현으로 푸는게 훨씬 잘 풀렸던 문제 같습니다.. 
- 그리디 엄청 어렵지만 그래도 최대한 이론대로 한 번 풀어보겠습니다.

4. 참고 링크

5. 문제 이해
*/
