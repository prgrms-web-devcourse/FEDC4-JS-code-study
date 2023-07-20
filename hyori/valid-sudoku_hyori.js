/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  for (let num = 0; num < 9; num++) {
      const rowSet = new Set()
      const colSet = new Set()
      const boxSet = new Set()

      for (let idx = 0; idx < 9; idx++) {
          const boxRow = Math.floor(num / 3) * 3 + Math.floor(idx / 3)
          const boxCol = (num % 3) * 3 + (idx % 3)
          const boxValue = board[boxRow][boxCol]
          const rowValue = board[num][idx]
          const ColValue = board[idx][num]

          if (rowSet.has(rowValue) || colSet.has(ColValue) || boxSet.has(boxValue)) {
              return false
          }
          rowValue !== '.' && rowSet.add(rowValue)
          ColValue !== '.' && colSet.add(ColValue)
          boxValue !== '.' && boxSet.add(boxValue)
      }
  }
  return true
}

/*
1. 알고리즘 or 자료구조 선택 이유
해시

2. 시간 복잡도 or 결과
runtime: 66 ms / beats 92.21%
memory: 44.1 mb / beats 96.24%

3. 기타 의견
최대한 한 번의 반복문에서 다 풀 수 있게끔 구현했습니다.
구조는 3분 이내로 생각 다 했는데,

변수명 짓기부터 시작해서
3x3 인덱스 구하는 게 어려워서 구현 하는 데에 시간이 오래 걸렸네요 ....... ㅎㅎ

참고로 저는 column과 row가 너무 헷갈립니다 😭

4. 참고 링크
*/