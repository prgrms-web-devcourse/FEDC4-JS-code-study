"use strict";
// 최대범위의 사각형 너비를 구하는 코드!
const largestRectangleArea = (heights) => {
  const n = heights.length;
  const stack = [];
  let maxArea = 0; // 첫 면적을 0으로

  // 각 사각형 바를 1개씩 돌면서
  for (let i = 0; i < n; i++) {
    // 만약 스택의 길이가 0이상이고, 각 높이가 스택의 마지막에 있는 높이보다 작거나 같으면
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      // 최대 면적의 넓이를 넓혀줍니다.
      maxArea = Math.max(maxArea, getArea(i, heights, stack));
    }

    // while문을 빠져나오면서 stack에 넣어줍ㄴ디ㅏ.
    stack.push(i);
  }

  // 스택에 남아있는 바 계산
  while (stack.length) {
    maxArea = Math.max(maxArea, getArea(n, heights, stack));
  }

  return maxArea;
};
