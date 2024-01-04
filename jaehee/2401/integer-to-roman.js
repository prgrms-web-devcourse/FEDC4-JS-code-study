/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let res = "";
  const order = [1000, 500, 100, 50, 10, 5, 1];
  const char = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  order.forEach((v) => {
    for (let i = 0; i < Math.floor(num / v); i++) {
      res += char[v];
    }
    num %= v;
  });

  res = res.replaceAll(/DCCCC/gi, "CM");
  res = res.replaceAll(/CCCC/gi, "CD");
  res = res.replaceAll(/LXXXX/gi, "XC");
  res = res.replaceAll(/XXXX/gi, "XL");
  res = res.replaceAll(/VIIII/gi, "IX");
  res = res.replaceAll(/IIII/gi, "IV");

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유
Hash

2. 시간 복잡도 or 결과
Runtime
84
ms
Beats
99.19%
of users with JavaScript
Memory
50.14
MB
Beats
17.44%
of users with JavaScript

3. 기타 의견 

4. 참고 링크

*/
