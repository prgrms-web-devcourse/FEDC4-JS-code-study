/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  path = path.split('/')
  const stack = []

  for (const p of path) {
    if (p === '..')
      stack.pop()
    else if (p !== '.' && p !== '')
      stack.push(p)
  }

  return '/' + stack.join('/')
}

/*
1. 알고리즘 or 자료구조 선택 이유
스택을 사용했습니다.

2. 시간 복잡도 or 결과
runtime: 56 ms / beats 93.25%
memory: 44.3 mb / beats 45.10%

3. 기타 의견
문제가 재밌었습니다.

4. 참고 링크

*/
