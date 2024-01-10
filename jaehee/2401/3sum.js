/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (legacyNums) {
  const obj = {};
  const nums = [];
  legacyNums.forEach((v) => {
    !!obj[v] ? (obj[v] = obj[v] + 1) : (obj[v] = 1);
    if (obj[v] < 4) nums.push(v);
  });
  nums.sort((a, b) => a - b);
  let answers = [];
  let left = 0;
  let right = 2;
  while (left < nums.length - 2) {
    const leftVal = nums[left];
    const rightVal = nums[right];
    for (let i = left + 1; i < right; i++) {
      const nowVal = nums[i];
      const sum = leftVal + nowVal + rightVal;
      if (sum === 0) {
        answers.push([nums[left], nums[i], nums[right]]);
      }
      if (sum > 0) break;
    }
    if (right < nums.length - 1) {
      right++;
    } else {
      left++;
      right = left + 2;
    }
  }

  const sortFunc = (a, b) => {
    if (a[0] - b[0] > 0) {
      return 1;
    } else if (a[0] - b[0] < 0) {
      return -1;
    }

    if (a[1] - b[1] > 0) {
      return 1;
    } else if (a[1] - b[1] < 0) {
      return -1;
    }

    if (a[2] - b[2] > 0) {
      return 1;
    } else if (a[2] - b[2] < 0) {
      return -1;
    }

    return 1;
  };

  answers.sort((a, b) => sortFunc(a, b));

  let leftVal = Infinity;
  let nowVal = Infinity;
  let rightVal = Infinity;

  answers = answers.filter(([a, b, c]) => {
    if (leftVal !== a || nowVal !== b || rightVal !== c) {
      leftVal = a;
      nowVal = b;
      rightVal = c;
      return true;
    }
    return false;
  });

  return answers;
};

/*
1. 알고리즘 or 자료구조 선택 이유
정렬, 투 포인터

2. 시간 복잡도 or 결과

3. 기타 의견 
실패... 2 케이스 시간 초과
조금만 더 생각하고 간소화했으면 통과했을듯

4. 참고 링크

*/
