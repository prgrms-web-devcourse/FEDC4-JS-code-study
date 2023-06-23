for (let i = 0; i < s; i++) {
//   for (let j = 1; j <= k; j++) {
//     const nextVirusQueue = [];

//     while (virusQueue[j].length) {
//       const [cx, cy] = virusQueue[j].shift();

//       for (let d = 0; d < 4; d++) {
//         const [nx, ny] = [cx + dx[d], cy + dy[d]];

//         if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

//         if (!visited[nx][ny] && arr[nx][ny] === 0) {
//           visited[nx][ny] = true;
//           arr[nx][ny] = j;
//           nextVirusQueue.push([nx, ny]);
//         }
//       }
//     }

//     virusQueue[j] = nextVirusQueue;
//   }
// }

// console.log(arr[x - 1][y - 1]);
