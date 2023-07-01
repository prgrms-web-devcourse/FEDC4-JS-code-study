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

/*
1. 알고리즘 or 자료구조 선택 이유
계속해서 나중에 들어간 원소와 비교하면서, 더 큰 높이의 바를 찾는 문제였습니다.
가장 나중에 들어간 값과 계속해서 비교를 해줘야하기 때문에, 스택을 사용하였습니다. 

2. 시간 복잡도 or 결과
- O(N^2)

3. 기타 의견 
- 문제가 상당히 어려웠습니다... 
- 다음 문제는 더 어려울 것으로 예상이 됩니다.. 

4. 참고 링크

*/
