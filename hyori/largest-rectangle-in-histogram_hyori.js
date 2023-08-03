/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  const stack = []
  let maxArea = 0

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack.length > 0 &&
      (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      const height = heights[stack.pop()]
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  return maxArea
}

/*
1. 알고리즘 or 자료구조 선택 이유
stack ..?

2. 시간 복잡도 or 결과
81ms 53.80mb

3. 기타 의견
왜 푼 기억이 없지 했는데, 실제로 푼 적이 없었군요.
오프라인 때 잠깐 봤던 기억만 있었네요..

그런 의미로 설명을 듣겠습니다.

at보다는 length - 1이 더 시간 효율이 좋네요.

4. 참고 링크
*/
