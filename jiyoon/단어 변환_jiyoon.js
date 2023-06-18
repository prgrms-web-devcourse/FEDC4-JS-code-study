// 2023.06.18 15:45 ~ 16:28
function solution(begin, target, words) {
  // 몇 단계를 거치는지
  let stage = 0;
  // 큐 선언 및 초기값 설정 [시작단어, 단계, 방문여부]
  const queue = [[begin, stage, false]];
  // words 배열안에 target이 없다면, 먼저 가지치기로 걸러주기
  if (!words.includes(target)) return 0;

  while (queue.length) {
    let [word, stage, visited] = queue.shift();
    // 정답
    if (word === target) {
      return stage;
    }
    // 방문했으면 패스 < 문제의 코드
    if (visited) {
      return;
    } else {
      words.forEach((item) => {
        // 알파벳이 같지 않은 개수
        let notEqualAlpaCnt = 0;

        for (let i = 0; i < item.length; i++) {
          if (item[i] !== word[i]) {
            notEqualAlpaCnt++;
          }
        }
        // 한개의 알파벳이 다르다면
        if (notEqualAlpaCnt === 1) {
          queue.push([item, stage + 1, visited]);
        }
      });
    }
    // 방문처리
    visited = true;
  }
  return stage;
}
/*
1. 알고리즘 or 자료구조 선택 이유
begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 하니까 이 문제도 BFS를 이용합니다.
BFS는 큐를 사용하여 풀 수 있습니다!

2. 시간 복잡도 or 결과
O(n^2)인 것 같은데 잘 모르겠습니다..
while문 + 내부 forEach 문
1. 방문 했을때의 코드가 있을때
테스트 1 〉	통과 (0.16ms, 33.6MB)
테스트 2 〉	통과 (0.21ms, 33.4MB)
테스트 3 〉	통과 (19.85ms, 36.8MB)
테스트 4 〉	통과 (0.18ms, 33.6MB)
테스트 5 〉	통과 (0.07ms, 33.6MB)

2. 방문 했을때의 코드를 쓰지 않았을 때,
테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.25ms, 33.5MB)
테스트 3 〉	통과 (3.79ms, 37.1MB)
테스트 4 〉	통과 (0.19ms, 33.6MB)
테스트 5 〉	통과 (0.14ms, 33.4MB)

3. 기타 의견(접근법)
앞에 문제랑 비슷하게 풀려고 노력했습니다!
프로그래머스 에디터에서 풀었을 때는 몰랐는데,
VSC에서는 if(visited){ return; }이 필요 없는 코드로 떠서, 빼고 돌렸더니 답이 인정됐습니다.
왜일까요..?

복붙하는 과정에서 들여쓰기 실수를 해서 다시 commit 합니다..
4. 참고 링크

*/
