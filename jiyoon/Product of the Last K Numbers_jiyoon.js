// 2023.06.25 15:35~16:00
const ProductOfNumbers = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  this.arr.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const sliceArr = this.arr.slice(this.arr.length - k);
  const answer = sliceArr.reduce((acc, cur) => (cur *= acc));
  return answer;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
/*
1. 알고리즘 or 자료구조 선택 이유
"add"이면 push해주고, "getProduct"이면 뒤에서 k만큼 빼서 곱해주어야 하므로
slice를 이용해서 배열을 구해주고, reduce를 사용해서 곱해주었습니다.

2. 시간 복잡도 or 결과
O(n) - slice, reduce
Runtime - 3190ms
Memory - 96.2MB

3. 기타 의견
문제만 읽고 골라서.. 생성자 함수로 푸는 문제인 줄 몰랐습니다 TT

4. 참고 링크

*/
