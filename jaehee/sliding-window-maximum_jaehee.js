/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const count = {}; // 각 숫자의 개수를 저장할 객체
  const output = [];

  Array.from(new Set(nums)).forEach((num) => {
    count[num] = 0;
  });

  // 최초 k개의 숫자를 버퍼에 저장하고, 각 숫자의 개수를 저장
  const buffer = nums.slice(0, k);
  buffer.forEach((num) => (count[num] += 1));

  // 최초 버퍼의 최대값을 저장
  let maxVal = Math.max(...buffer);
  output.push(maxVal);

  let i = 1;
  while (i + k <= nums.length) {
    const newVal = nums[i + k - 1]; // 새로운 숫자
    const shiftVal = nums[i - 1]; // 버퍼에서 제거될 숫자
    count[newVal] += 1;
    count[shiftVal] -= 1;

    // 최대값이 갱신되면 추가하고 이동
    if (maxVal < newVal) {
      output.push(newVal);
      maxVal = newVal;
      i++;
      continue;
    }

    // 최대값이 제거되면 다시 계산
    // FIXME: 비효율적인 부분
    if (maxVal === shiftVal && !count[maxVal]) {
      maxVal = Math.max(...nums.slice(i, i + k));
    }

    // 최대값이 그대로거나 제거되어 다시 계산된 경우
    output.push(maxVal);
    i++;
  }

  return output;
};

/*
1. 알고리즘 or 자료구조 선택 이유
제 풀이에서는 스택이나 큐가 크게 이용되지 않았습니다.
다이나믹 프로그래밍과 조금 비슷하게 이전 결과를 활용하는 식의 풀이입니다.

2. 시간 복잡도 or 결과
while문이 n-k번 반복되고, 최악의 경우 k개의 숫자에서 최대값을 찾는 연산이 추가로 필요합니다.
O((n-k)*k))

Runtime
5227 ms
Beats
7.58%
Memory
111.5 MB
Beats
5.22%

3. 기타 의견
FIXME로 표시한 부분이 비효율적인 부분입니다. 이 부분에서 k개의 숫자를 다시 계산해야 하기 때문에 시간이 오래 걸립니다.
때문에 시간, 공간 복잡도 모두 저조하게 나왔습니다. (리트코드는 100%에 가까울수록 좋은 것이더라고요?)

4. 참고 링크

*/
