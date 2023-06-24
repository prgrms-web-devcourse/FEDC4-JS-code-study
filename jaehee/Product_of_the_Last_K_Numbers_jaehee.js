var ProductOfNumbers = function () {
  this.stack = [];
  this.length = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  this.stack.push(num);
  this.length++;
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  let product = 1;
  for (let i = this.length - 1; i > this.length - 1 - k; i--) {
    product *= this.stack[i];
  }
  return product;
};

//18m

/*
1. 알고리즘 or 자료구조 선택 이유
stack을 사용해 풀었습니다. 지금 생각해보니 굳이 length를 저장하지 않고 pop()을 사용해도 됐을 것 같습니다.

2. 시간 복잡도 or 결과
O(n)

3. 기타 의견 
생성자 함수의 각 메서드를 구현하는 내용이 익숙치 않아서 신기했습니다.

4. 참고 링크

*/
