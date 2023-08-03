/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let res = 0;
  let min_h = Infinity;
  const stack = [];

  heights.forEach((h, i) => {
    // console.log(i, h, res)
    if (stack.length === 0) {
      stack.push([i, h]);
    } else {
      while (true) {
        const [i_last, h_last] = stack.at(-1);
        if (h_last <= h) {
          stack.push([i, h]);
          break;
        }
        min_h = Math.min(min_h, h);
        res = Math.max(res, (i - i_last) * h_last);
        stack.pop();
        if (stack.length === 0) {
          stack.push([i_last, h]);
          break;
        }
        if (stack.length > 0 && stack.at(-1)[1] < h) {
          stack.push([i_last, h]);
          break;
        }
      }
    }
  });

  while (stack.length) {
    const [i_last, h_last] = stack.pop();
    min_h = Math.min(min_h, h_last);
    res = Math.max(res, (heights.length - i_last) * h_last);
  }

  return Math.max(res, heights.length * min_h);
};

/*
1. 알고리즘 or 자료구조 선택 이유
stack

2. 시간 복잡도 or 결과
Runtime
176 ms
Beats
29.19%
Memory
75.4 MB
Beats
22.2%

3. 기타 의견 
접근법을 구글링해서 알아낸 뒤 다시 풀었는데도 시간이 오래 걸렸습니다.
차근차근 따져보면서 풀어야겠습니다.

4. 참고 링크
https://greeksharifa.github.io/ps/2018/07/07/PS-06549/

*/
