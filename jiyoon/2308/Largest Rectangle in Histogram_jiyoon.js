// 2:35~3:21
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  const stack = [];
  heights.push(0); // 마지막 높이 처리 용도
  // [2,1,5,6,2,3,0]
  let maxArea = 0; // 최대 넓이

  for (let i = 0; i < heights.length; i++) {
    let index = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [pos, height] = stack.pop();
      // console.log(pos, height);
      maxArea = Math.max(maxArea, (i - pos) * height);
      index = pos;
    }
    // console.log(maxArea); // 0 2 2 2 10 10 10
    stack.push([index, heights[i]]);
    console.log(stack);
  }
  return maxArea;
};
/*
1. 알고리즘 or 자료구조 선택 이유
stack

2. 시간 복잡도 or 결과
Runtime - 107ms 72.73%
Memory - 74.30mb 28,30%

3. 기타 의견
못 풀었읍니다..
근데 풀이를 봐도 잘 이해가 안되서 
일단 커밋하고, 좀 더 공부하고 오겠습니다.


4. 참고 링크
https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/1430546/monotonique-stack-solution-intuition-javascript/

*/
