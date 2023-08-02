function solution(rectangle, characterX, characterY, itemX, itemY) {
  let map = Array.from(Array(103).fill(0), () => Array(103).fill(0))

  let doubleRectangle = rectangle.map((current) =>
    current.map((point) => point * 2)
  )

  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          if (map[j][i] === 1) {
            continue
          } else {
            map[j][i] += 1
          }
        } else {
          map[j][i] += 2
        }
      }
    }
  })

  characterX *= 2
  characterY *= 2
  itemX *= 2
  itemY *= 2

  const directionX = [1, -1, 0, 0]
  const directionY = [0, 0, 1, -1]

  const queue = [[characterX, characterY, 0]]
  map[characterX][characterY] += 100

  while (queue.length) {
    const [currentX, currentY, count] = queue.shift()

    if (currentX === itemX && currentY === itemY) {
      return count / 2
    }

    for (let i = 0; i < 4; i++) {
      const [nX, nY] = [currentX + directionX[i], currentY + directionY[i]]

      if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101)
        if (map[nX][nY] === 1) {
          map[nX][nY] += 100
          queue.push([nX, nY, count + 1])
        }
    }
  }
}

/*
1. 알고리즘 or 자료구조 선택 이유
bfs

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.69ms, 33.5MB)
테스트 2 〉	통과 (0.28ms, 33.4MB)
테스트 3 〉	통과 (0.34ms, 33.5MB)
테스트 4 〉	통과 (0.29ms, 33.5MB)
테스트 5 〉	통과 (0.28ms, 33.4MB)
테스트 6 〉	통과 (0.70ms, 33.5MB)
테스트 7 〉	통과 (0.81ms, 33.6MB)
테스트 8 〉	통과 (0.54ms, 33.6MB)
테스트 9 〉	통과 (1.13ms, 33.7MB)
테스트 10 〉	통과 (1.13ms, 33.7MB)
테스트 11 〉	통과 (1.23ms, 33.8MB)
테스트 12 〉	통과 (1.59ms, 33.8MB)
테스트 13 〉	통과 (1.13ms, 33.7MB)
테스트 14 〉	통과 (0.79ms, 33.7MB)
테스트 15 〉	통과 (0.58ms, 33.7MB)
테스트 16 〉	통과 (1.13ms, 33.7MB)
테스트 17 〉	통과 (1.07ms, 33.8MB)
테스트 18 〉	통과 (1.05ms, 34MB)
테스트 19 〉	통과 (1.84ms, 34MB)
테스트 20 〉	통과 (1.52ms, 33.8MB)
테스트 21 〉	통과 (1.18ms, 33.9MB)
테스트 22 〉	통과 (0.84ms, 33.6MB)
테스트 23 〉	통과 (1.09ms, 33.7MB)
테스트 24 〉	통과 (1.78ms, 33.8MB)
테스트 25 〉	통과 (1.03ms, 33.6MB)
테스트 26 〉	통과 (0.64ms, 33.6MB)
테스트 27 〉	통과 (0.74ms, 33.6MB)
테스트 28 〉	통과 (0.72ms, 33.7MB)
테스트 29 〉	통과 (1.11ms, 33.6MB)
테스트 30 〉	통과 (0.64ms, 33.6MB)

3. 기타 의견
깔끔한 참고 ..
후에 이해를 해보도록 하겠습니다.

4. 참고 링크
https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A4%8D%EA%B8%B0-JavaScript
*/
