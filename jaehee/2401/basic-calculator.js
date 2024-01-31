const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const getValue = (a, b, op) => {
  a = parseInt(a);
  b = parseInt(b);

  switch (op) {
    case "+":
      return plus(a, b);
    case "-":
      return minus(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const process = s.split("").filter((v) => v.trim() !== "");
  const tokens = [];
  let temp = process[0];
  for (let i = 1; i < process.length; i++) {
    if ((temp + process[i]).match(/(\(-)/g)) {
      tokens.push();
    } else if (temp.match(/\d/g) && process[i].match(/\d/g)) {
      temp += process[i];
    } else {
      tokens.push(temp);
      temp = process[i];
    }
  }
  tokens.push(temp);

  const ops = new Set(["+", "-", "*", "/"]);
  const st = [];
  const opst = [];
  let pair = true;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.match(/\d/g)) {
      st.push(parseInt(token));
    }
    if (ops.has(token)) {
      if (tokens[i + 1] === "(") {
        opst.push(token);
      } else {
        st.push(getValue(st.pop(), tokens[i + 1], token));
      }
      i++;
    }
    if (token === ")") {
      if (st.length > 1) {
        const b = st.pop();
        const a = st.pop();
        st.push(getValue(a, b, opst.pop()));
      }
    }
    console.log(st, opst, token);
  }

  return st[0];
};

/*
1. 알고리즘 or 자료구조 선택 이유
스택

2. 시간 복잡도 or 결과

3. 기타 의견 
접근을 잘못함...

4. 참고 링크

*/
