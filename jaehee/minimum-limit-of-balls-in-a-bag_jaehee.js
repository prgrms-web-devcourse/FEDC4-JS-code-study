/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  // maxOp을 통해 가방의 최대 공 개수 최소화 하기 -> maxOp번으로 mid개가 최대이 만들 수 있나?
  // 최대 값이 늘어날수록 가방의 개수는 줄어든다
  // 가방의 개수 = nums+operations
  // 가방의 개수 nums+op을 가지고 최대값 mid개를 만들 수 있나?
  // try마다 가장 큰 값을 선택하면 된다.
  // 꼭 개수를 반반으로 나눴을 때 정답인 것은 아니다.
  let res = Infinity;
  nums.sort((a, b) => b - a);

  let start = 1;
  let end = nums[0];

  const isPossibleToBeMid = (mid) => {
    let curNums = [...nums];
    let triesLeft = maxOperations;

    while (triesLeft > 0) {
      const balls = curNums[0];

      if (curNums[0] <= mid) return true;
    }

    return false;
  };

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (isPossibleToBeMid(mid)) {
      end = mid - 1;
      res = Math.min(res, mid);
    } else {
      start = mid + 1;
    }
  }

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유
ㅠㅠ 시도해봤는데 어떻게 구현해야할지 감이 안 잡히네요. hint까지 확인했는데, 이진탐색과 기준 변경에 대해 써 있는게 보니 parametric search인 것은 맞다고 생각했습니다.

2. 시간 복잡도 or 결과
fail

3. 기타 의견 

4. 참고 링크

*/
