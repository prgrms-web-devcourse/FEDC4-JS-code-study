/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let last = nums[0];
  let temp = nums[0];
  let answer = [];

  nums.shift();

  nums.forEach((v) => {
    if (temp + 1 !== v) {
      if (last === temp) {
        answer.push(temp.toString());
      } else {
        answer.push(last.toString() + "->" + temp.toString());
      }
      temp = v;
      last = v;
    } else {
      temp = v;
    }
  });

  if (last === temp) {
    answer.push(temp.toString());
  } else {
    answer.push(last.toString() + "->" + temp.toString());
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
배열

2. 시간 복잡도 or 결과

Runtime
52
ms
Beats
52.71%
of users with JavaScript
Memory
49.01
MB
Beats
5.18%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
