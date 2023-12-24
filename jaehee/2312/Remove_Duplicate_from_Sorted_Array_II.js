/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let temp = -Infinity;
  let count = 0;
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (temp !== nums[i]) {
      temp = nums[i];
      count = 1;
    } else {
      count++;
    }

    if (count <= 2) {
      nums[idx] = temp;
      idx++;
    }
  }

  nums.splice(idx);
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열, 투 포인터
  
2. 시간 복잡도 or 결과
Runtime
45
ms
Beats
98.83%
of users with JavaScript
Memory
44.06
MB
Beats
50.11%
of users with JavaScript

3. 기타 의견 
  
4. 참고 링크
  
*/
