/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  const result = []

  people.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1]
      return b[0] - a[0]
  })

  people.forEach((i) => result.splice(i[1], 0, i))

  return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
그리디 알고리즘

sort로 키를 기준으로 오름차순으로 정렬합니다.
키가 같다면 앞에 본인 키보다 크거나 같은 사람 수가 많은 순으로 정렬합니다.

2. 시간 복잡도 or 결과
위 코드
runtime: 92 ms / beats 72.37%
memory: 46.9 mb / beats 96.5%

-
연결 리스트 코드
runtime: 100ms / beats 55.26%
memory: 47.6 mb / 81.58%

3. 기타 의견
sort까지는 똑같이 풀었는데, 
splice는 비효율적인 메서드라 당연히 배제하고 어렵게만 생각했다가
결국 시간을 너무 허비해서 답을 봤습니다.

답을 베낀 이후에
연결 리스트도 직접 구현해서 문제를 풀어봤는데,
제가 뭔가 부족했던지 런타임이 더 걸리더라고요! ㅎㅎ

4. 참고 링크
https://leetcode.com/problems/queue-reconstruction-by-height/solutions/323115/concise-js-solution/
*/