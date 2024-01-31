const getCeil = (v) => (v > 0 ? Math.floor(v) : Math.ceil(v));

const getValue = (a, b, op) => {
  a = parseInt(a);
  b = parseInt(b);
  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "*":
      return (a * b).toString();
    case "/":
      return getCeil(a / b).toString();
  }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const nums = [];

  for (let token of tokens) {
    if (token.match(/-?\d+/g)) {
      nums.push(token);
    } else {
      const b = nums.pop();
      const a = nums.pop();
      const res = getValue(a, b, token);
      nums.push(res);
    }
  }

  return nums[0];
};

/*
1. 알고리즘 or 자료구조 선택 이유
스택

2. 시간 복잡도 or 결과
Runtime
62
ms
Beats
63.23%
of users with JavaScript
Memory
53.60
MB
Beats
5.57%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
