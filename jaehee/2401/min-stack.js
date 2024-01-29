var MinStack = function () {
  this.st = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.st.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.st.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.st);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
1. 알고리즘 or 자료구조 선택 이유
스택

2. 시간 복잡도 or 결과

Runtime
232
ms
Beats
9.11%
of users with JavaScript
Memory
59.30
MB
Beats
11.36%
of users with JavaScript

3. 기타 의견 
통과는 했는데 문제 조건에 부합하지 않아 틀렸다고 볼 수 있다. 어떤 방식으로 해결했는지 풀이를 참고해서 숙지하기

4. 참고 링크

*/
