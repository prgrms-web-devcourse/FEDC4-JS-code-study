const validateStackSequences = function (pushed, popped) {
  let pushedIndex = 0;
  let poppedIndex = 0;
  const stack = [];
  while (pushedIndex < pushed.length) {
    if (stack[stack.length - 1] !== popped[poppedIndex]) {
      stack.push(pushed[pushedIndex++]);
    } else {
      stack.pop();
      poppedIndex += 1;
    }
  }
  while (stack.length) {
    if (stack.pop() !== popped[poppedIndex++]) {
      return false;
    }
  }
  return true;
};

/*
=====> 풀다가 너무 어려워서 팀원분들께도 조언을 구해봤는데 못풀었습니다..
멘토님과 저녁식사가 있어서 제가 꼭 빠른시일내에 다시 풀어보겠습니다.. 죄송합니다ㅠ



1. 알고리즘 or 자료구조 선택 이유


2. 시간 복잡도 or 결과
- O(N^2)

3. 기타 의견 
- 문제가 상당히 어려웠습니다... 
- 다음 문제는 더 어려울 것으로 예상이 됩니다.. 

4. 참고 링크
https://beizhedenglong.github.io/leetcode-solutions/docs/validate-stack-sequences
*/
