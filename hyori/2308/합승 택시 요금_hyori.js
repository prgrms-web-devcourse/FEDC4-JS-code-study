function solution(n, s, a, b, fares) {
  const board = new Array(n).fill().map((_) => new Array(n).fill(Infinity))

  for (let i = 0; i < n; i++) board[i][i] = 0

  fares.forEach((pos) => {
    const [x, y, weight] = pos
    board[x - 1][y - 1] = weight
    board[y - 1][x - 1] = weight
  })

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] > board[i][k] + board[k][j])
          board[i][j] = board[i][k] + board[k][j]
      }
    }
  }

  let answer = board[s - 1][a - 1] + board[s - 1][b - 1]
  for (let i = 0; i < n; i++) {
    const shortest = board[s - 1][i] + board[i][a - 1] + board[i][b - 1]
    answer = Math.min(answer, shortest)
  }

  return answer
}

/*
1. 알고리즘 or 자료구조 선택 이유
플로이드 워셜 ?

2. 시간 복잡도 or 결과
대충 통과 ,, n^3

3. 기타 의견
풀이 참고했습니다!

음 .. 풀이를 보니까 간단해보이면서도
아직 갈 길이 멀다 라는 생각이 드네요 ..?
기초 문제를 안 풀고 바로 어려운 문제를 도전해서 그런지 많이 어렵네요.

4. 참고 링크
*/
