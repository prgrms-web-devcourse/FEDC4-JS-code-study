function solution(rectangle, characterX, characterY, itemX, itemY) {
  const xs = [0, 0, -1, 1];
  const ys = [1, -1, 0, 0];

  let res = [];
  const maps = Array.from({ length: 104 }, () =>
    Array.from({ length: 104 }, () => 0)
  );

  rectangle.forEach((v) => {
    const [x1, y1, x2, y2] = v.map((vv) => vv * 2);
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (maps[i][j] === 0) maps[i][j] = 1;
        } else {
          maps[i][j] = 2;
        }
      }
    }
  });

  const q = [[characterX * 2, characterY * 2, 0]];

  while (q.length) {
    const [x, y, leng] = q.shift();
    maps[x][y] = 2;
    // console.log(x, y, leng)

    if (x === itemX * 2 && y === itemY * 2) {
      res.push(leng);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const [tempX, tempY] = [x + xs[i], y + ys[i]];
      if (
        tempX >= 0 &&
        tempX < 104 &&
        tempY >= 0 &&
        tempY < 104 &&
        maps[tempX][tempY] === 1
      ) {
        q.push([tempX + xs[i], tempY + ys[i], leng + 2]);
        maps[tempX][tempY] = 2;
      }
    }
  }

  return Math.min(...res) / 2;
}

// 1h 20m

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (1.14ms, 33.5MB)
테스트 2 〉	통과 (1.05ms, 33.5MB)
테스트 3 〉	통과 (1.06ms, 33.6MB)
테스트 4 〉	통과 (1.50ms, 33.5MB)
테스트 5 〉	통과 (1.08ms, 33.6MB)
테스트 6 〉	통과 (1.12ms, 33.5MB)
테스트 7 〉	통과 (1.30ms, 33.5MB)
테스트 8 〉	통과 (1.49ms, 33.5MB)
테스트 9 〉	통과 (1.79ms, 33.7MB)
테스트 10 〉	통과 (1.64ms, 33.7MB)
테스트 11 〉	통과 (1.68ms, 33.7MB)
테스트 12 〉	통과 (1.69ms, 33.6MB)
테스트 13 〉	통과 (1.82ms, 33.7MB)
테스트 14 〉	통과 (1.57ms, 33.7MB)
테스트 15 〉	통과 (1.40ms, 33.7MB)
테스트 16 〉	통과 (1.63ms, 33.7MB)
테스트 17 〉	통과 (1.63ms, 33.6MB)
테스트 18 〉	통과 (1.60ms, 33.8MB)
테스트 19 〉	통과 (1.86ms, 33.7MB)
테스트 20 〉	통과 (1.94ms, 33.7MB)
테스트 21 〉	통과 (1.69ms, 33.7MB)
테스트 22 〉	통과 (1.51ms, 33.7MB)
테스트 23 〉	통과 (1.71ms, 33.8MB)
테스트 24 〉	통과 (1.62ms, 33.6MB)
테스트 25 〉	통과 (1.33ms, 33.6MB)
테스트 26 〉	통과 (1.30ms, 33.8MB)
테스트 27 〉	통과 (1.40ms, 33.6MB)
테스트 28 〉	통과 (1.30ms, 33.6MB)
테스트 29 〉	통과 (1.42ms, 33.6MB)
테스트 30 〉	통과 (1.41ms, 33.8MB)

3. 기타 의견 

4. 참고 링크

*/
