// 2023,06.22 14:22~18:00
const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : './jiyoon/18405-경쟁적 전염/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [n, virusKind] = input.shift().split(' ').map(Number);

const [time, goalY, goalX] = input.slice(-1)[0].split(' ').map(Number);
const map = input.slice(0, -1).map((i) => i.split(' ').map(Number));

solution(n, virusKind, time, goalY, goalX, map);

function solution(n, virusKind, time, goalY, goalX, map) {
  // 상, 하, 좌, 우
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  // 방문 배열
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );
  //console.log(visited);
  // [[ false, false, false ],[ false, false, false ],[ false, false, false ]]
  const virusLocation = Array.from({ length: virusKind + 1 }, () => []);
  //console.log(virusLocation); // [ [], [], [], [] ]
  // 바이러스 위치를 담아주고, 방문함
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (map[y][x] === 0) {
        continue;
      }
      visited[y][x] = true;
      virusLocation[map[y][x]].push([y, x]);
    }
  }
  // 정렬 되는 이유가 뭐지??????
  //console.log(virusLocation); // [ [], [], [ [ 2, 0 ], [ 2, 2 ] ], [ [ 1, 0 ], [ 2, 1 ] ] ]
  //console.log(visited); // [[ false, false, false ],[ true, false, false ],[ true, true, true ]]

  // 시간만큼 반복
  for (let i = 0; i < time; i++) {
    // 바이러스 작은값부터 진행
    for (let j = 1; j <= virusKind; j++) {
      const nextVirusQueue = [];
      //console.log(virusLocation[j]);
      // []
      // [ [ 2, 0 ], [ 2, 2 ] ]
      // [ [ 1, 0 ], [ 2, 1 ] ]
      while (virusLocation[j].length) {
        const [currY, currX] = virusLocation[j].shift();
        //console.log([currY, currX]); // [2,0]
        // 전파
        for (let k = 0; k < 4; k++) {
          const newY = currY + dy[k];
          const newX = currX + dx[k];
          //console.log(newY, newX); // 1 0, 3 0 , 2 -1, 2 1
          if (
            newX >= 0 &&
            newX < n &&
            newY >= 0 &&
            newY < n &&
            map[newY][newX] === 0 &&
            !visited[newY][newX]
          ) {
            // 방문처리
            visited[newY][newX] = true;
            // 가능한 좌표를 j로 전파
            map[newY][newX] = j;
            // 새로운 바이러스 큐에 추가
            nextVirusQueue.push([newY, newX]);
          }
        }
      }
      // 모든 칸을 전파 한 후, 변경사항 바꿔 줌
      virusLocation[j] = nextVirusQueue;
    }
  }
  console.log(map[goalY - 1][goalX - 1]);
}
/*
1. 알고리즘 or 자료구조 선택 이유
번호가 낮은 종류의 바이러스부터 먼저 증식하므로 bfs인 것 같습니다.

2. 시간 복잡도 or 결과
O(n^2 * k * t) 
n: 맵의 크기
k: 바이러스 종류
t: 시간

3. 기타 의견
구현하는 것이 어렵네요..
참고 자료를 봐도 어려웠습니다
다른 팀원 분들의 좋은 코드를 보고 배우겠습니다!

4. 참고 링크
https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-18045-%EA%B2%BD%EC%9F%81%EC%A0%81-%EC%A0%84%EC%97%BC-javascript
*/
