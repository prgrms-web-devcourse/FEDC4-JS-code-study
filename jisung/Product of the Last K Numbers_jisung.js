const ProductOfNumbers = function () {
  this.prefixProduct = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.prefixProduct = [];
  } else if (this.prefixProduct[this.prefixProduct.length - 1] !== undefined) {
    this.prefixProduct.push(
      this.prefixProduct[this.prefixProduct.length - 1] * num
    );
  } else {
    this.prefixProduct.push(num);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const { length } = this.prefixProduct;
  const index = length - k - 1;
  return length < k
    ? 0
    : this.prefixProduct[length - 1] / (this.prefixProduct[index] || 1);
};

/*
1. 알고리즘 or 자료구조 선택 이유
계속해서 뒤에 값을 넣는 문제였다. 

2. 시간 복잡도 or 결과
- 

3. 기타 의견 
- 리트코드를 처음 풀어서 굉장히 힘들었지만 다행히 문제 자체는 쉬운 문제여서 괜찮았던 것 같습니다. 
- 그래도 아직 많이 적응이 좀 필요해보입니다. 

4. 참고 링크

*/
