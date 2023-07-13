// /**
//  * @param {number} n
//  * @return {number}
//  */
// var checkRecord = function (n) {
//   let res = 0;
//   const fail = "LLL";

//   const attendDays = (time, attendString, absentCount) => {
//     if (absentCount >= 2) return 0;
//     if (attendString.slice(-3) === fail) return 0;
//     if (time >= n) {
//       res += 1;
//       res %= 10 ** 9 + 7;
//       return 0;
//     }

//     attendDays(time + 1, attendString + "A", absentCount + 1);
//     attendDays(time + 1, attendString + "L", absentCount);
//     attendDays(time + 1, attendString + "P", absentCount);

//     return 0;
//   };

//   attendDays(0, "", 0);

//   return res;
// };

// fail (time exceed) 48m

/*
1. 알고리즘 or 자료구조 선택 이유
DFS는 역시 안되네요ㅋㅋ...

2. 시간 복잡도 or 결과

3. 기타 의견 

4. 참고 링크

*/
