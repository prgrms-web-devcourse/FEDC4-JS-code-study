/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathStr = path.split("");
  const dirs = [];
  const res = [];
  let lastChar = "/";
  let tempVal = "/";

  // 문자열을 / 기준으로 나누어 배열에 저장
  for (let i = 1; i < pathStr.length; i++) {
    if (lastChar === "/" && pathStr[i] === "/") {
      continue;
    }

    if (lastChar !== "/" && pathStr[i] === "/") {
      dirs.push(tempVal);
      tempVal = "/";
    } else {
      tempVal += pathStr[i];
    }
    lastChar = pathStr[i];
  }
  dirs.push(tempVal);

  // 배열을 순회하며 /.. 이면 이전 경로를 제거
  // /.과 /은 무시
  dirs.forEach((dir) => {
    if (dir === "/..") res.pop();
    else if (dir !== "/." && dir !== "/") res.push(dir);
  });

  // 경로가 없으면 /를 리턴
  if (!res.length) return "/";

  return res.join("");
};

/*
1. 알고리즘 or 자료구조 선택 이유
스택을 사용하여 풀었습니다.

2. 시간 복잡도 or 결과
O(글자수)

Runtime
71 ms
Beats
36.96%
Memory
44 MB
Beats
76.33%

3. 기타 의견 
실제 폴더 경로대로 생각하며 침착하게 풀었으면 헤매지 않았을텐데... 일단 영어로 된 문제라서 이해하는데 시간이 좀 걸렸습니다.

4. 참고 링크

*/
