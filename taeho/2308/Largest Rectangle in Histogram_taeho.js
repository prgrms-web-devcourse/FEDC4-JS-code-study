/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [];
  let result = 0;

  for (let idx = 0; idx < heights.length; idx++) {
    const height = heights[idx];

    if (stack.length === 0) {
      stack.push([idx, height]);
    } else {
      let width = idx; // 가로를 인덱스로 생각함
      while (stack.length !== 0 && stack[stack.length - 1][1] > height) {
        const value = stack.pop();
        width = value[0];
        const size = value[1] * (idx - value[0]);
        if (result < size) {
          result = size;
        }
      }
      stack.push([width, height]);
    }
  }

  // 남아있을 stack에서 size를 구하면서 최댓값이 나올 수 있는 경우를 생각해줌
  while (stack.length !== 0) {
    const value = stack.pop();
    const size = value[1] * (heights.length - value[0]);
    if (result < size) {
      result = size;
    }
  }

  return result;
}

/*
1. 알고리즘 or 자료구조 선택 이유
답과 설명을 참고했습니다.. 저번에 그냥 못풀겠다 하고 넘어간 것 같네요.. 하나도 기억이 안나더라고요..

2. 시간 복잡도 or 결과
Runtime 103 ms Beats 77.8%
Memory 74 MB Beats 34.44%

3. 참고링크
https://ggodong.tistory.com/226
*/
