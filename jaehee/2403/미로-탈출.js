const xs = [1, -1, 0, 0];
const ys = [0, 0, 1, -1];

function solution(maps) {
  let answer = 0;
  const start = [0, 0];
  const exit = [0, 0];
  const lever = [0, 0];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        start[0] = i;
        start[1] = j;
      }
      if (maps[i][j] === "E") {
        exit[0] = i;
        exit[1] = j;
      }
      if (maps[i][j] === "L") {
        lever[0] = i;
        lever[1] = j;
      }
    }
  }

  const toLever = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(Infinity)
  );
  const toExit = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(Infinity)
  );

  const travel = (x, y, dx, dy, record, last) => {
    if (x === dx && y === dy) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (
        maps[x + xs[i]]?.[y + ys[i]] &&
        maps[x + xs[i]][y + ys[i]] !== "X" &&
        record[x + xs[i]][y + ys[i]] > last + 1
      ) {
        record[x + xs[i]][y + ys[i]] = last + 1;
        travel(x + xs[i], y + ys[i], dx, dy, record, last + 1);
      }
    }
  };

  travel(start[0], start[1], lever[0], lever[1], toLever, 0);
  if (toLever[lever[0]][lever[1]] === Infinity) return -1;
  travel(lever[0], lever[1], exit[0], exit[1], toExit, 0);

  answer = toLever[lever[0]][lever[1]] + toExit[exit[0]][exit[1]];

  return answer === Infinity ? -1 : answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
DFS, BFS

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.45ms, 33.4MB)
테스트 2 〉	통과 (0.68ms, 33.4MB)
테스트 3 〉	통과 (25.63ms, 37.1MB)
테스트 4 〉	통과 (0.83ms, 33.4MB)
테스트 5 〉	통과 (0.46ms, 33.5MB)
테스트 6 〉	통과 (0.74ms, 33.4MB)
테스트 7 〉	통과 (23.43ms, 37MB)
테스트 8 〉	통과 (51.56ms, 37.1MB)
테스트 9 〉	통과 (0.45ms, 33.4MB)
테스트 10 〉	통과 (0.37ms, 33.4MB)
테스트 11 〉	통과 (83.25ms, 41MB)
테스트 12 〉	통과 (230.44ms, 39.2MB)
테스트 13 〉	통과 (892.58ms, 43.4MB)
테스트 14 〉	통과 (1172.74ms, 44.2MB)
테스트 15 〉	통과 (23.16ms, 37.2MB)
테스트 16 〉	통과 (7913.58ms, 51.1MB)
테스트 17 〉	통과 (8851.46ms, 50.8MB)
테스트 18 〉	통과 (2.16ms, 37.2MB)
테스트 19 〉	통과 (0.81ms, 33.5MB)
테스트 20 〉	통과 (2253.52ms, 47.3MB)
테스트 21 〉	통과 (20.54ms, 37.1MB)
테스트 22 〉	통과 (0.51ms, 33.5MB)
테스트 23 〉	통과 (0.33ms, 33.4MB)

3. 기타 의견 
BFS가 더 좋았을 것 같다.
이상하게 xs, ys 순서를 변경했더니 성공했다...

4. 참고 링크

*/
