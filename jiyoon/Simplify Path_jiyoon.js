/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stack = [];
  const newPath = path.split('/');

  for (let i = 0; i < newPath.length; i++) {
    if (newPath[i] === '' || newPath[i] === '.') {
      continue;
    } else if (newPath[i] === '..') {
      stack.pop();
    } else {
      stack.push(newPath[i]);
    }
  }
  return '/' + stack.join('/');
};

// . 무시
// .. 원소 하나 제거
/*
1. 알고리즘 or 자료구조 선택 이유
스택사용
'/' 을 기준으로 나누어서
1. 배열이 빈 값이거나 '.' 이면 pass
2. 배열이 '..' 이면 pop으로 꺼내주기
3. 나머지 push
4. 경로 처음에 '/' 더해주기

2. 시간 복잡도 or 결과
O(n)
Runtime - 63ms 75.16%
Memory - 44.4MB 45.10%

3. 기타 의견
맨 처음에 접근 부터 잘못해서 문제 이해 후 풀었습니다.

4. 참고 링크

*/
