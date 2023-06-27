/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const q = [];

  while (pushed.length || popped.length) {
    const current = popped[0];

    if (pushed.length && current === pushed[0]) {
      popped.shift();
      pushed.shift();
    } else if (q.length && q[q.length - 1] === current) {
      q.pop();
      popped.shift();
    } else if (pushed.length) {
      q.push(pushed.shift());
    } else {
      return false;
    }
  }

  return true;
};

//32m

/*
1. 알고리즘 or 자료구조 선택 이유
pushed를 처리한 이후 pop되지 않은 값들을 담을 q를 만들고 케이스에 따라 처리했습니다.
그런데 위 코드도 굉장히 잘못 짰고... 애초에 접근을 짜임새있게 못 해서 많이 헤맸네요.

2. 시간 복잡도 or 결과
리트코드의 시간복잡도 순위가 뒤에 있었습니다.


3. 기타 의견

4. 참고 링크

*/
