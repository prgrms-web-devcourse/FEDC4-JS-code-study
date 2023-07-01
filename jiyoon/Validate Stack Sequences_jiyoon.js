//2023.06.26 16:55~17:19
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    // 스택에 마지막 원소가 popped의 원소와 같을때 까지 push
    const num = pushed[i];
    stack.push(num);
    // 스택이 비어있지 않고, 같으면 pop하고 popped의 인덱스 이동
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0 ? true : false;
};

/*
1. 알고리즘 or 자료구조 선택 이유
스택문제였습니다!

2. 시간 복잡도 or 결과
O(n^2)

3. 기타 의견
시간 복잡도가 크게 나왔는데, 더 좋은 방법이 있다면 알려주세요!

4. 참고 링크

*/
