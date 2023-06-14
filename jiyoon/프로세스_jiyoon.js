// 2023.06.14 15:00~15:56
function solution(priorities, location) {
  let idx = 0;
  // index를 나타내는 배열 생성 [0,1,2,3]
  const idxArr = Array.from({ length: priorities.length }, (v, i) => i);
  // priorities배열의 최댓값 3
  let max = Math.max(...priorities);

  while (priorities.length !== 0) {
    // 첫번째 원소 < max 이면 맨 뒤로 이동
    // 인덱스도 같이 뒤로 이동
    // idxArr [1,2,3,0], priorities [1,3,2,2]
    // idxArr [2,3,0,1], priorities [3,2,2,1]
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      idxArr.push(idxArr.shift());
    }
    // 첫번째 원소 >= max
    else {
      // 인덱스(실행 순서) 1 증가
      idx++;
      // 3의 인덱스값은 2 === 2
      if (idxArr.shift() === location) {
        return idx;
      }
      // 맨 앞에 값 제거 [2, 2, 1]
      priorities.shift();
      // priorities 배열의 최댓값 다시 설정 max = 2
      max = Math.max(...priorities);
    }
  }
}
/*
1. 알고리즘 or 자료구조 선택 이유
기본적인 설명을 따라서 구현했습니다..!

2. 시간 복잡도 or 결과
시간 복잡도: O(n^2)? while문 O(n) 내부에 Math.max 시간 복잡도 O(n)
테스트 1 〉	통과 (0.21ms, 33.6MB)
테스트 2 〉	통과 (0.56ms, 33.6MB)
테스트 3 〉	통과 (0.26ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)
테스트 6 〉	통과 (0.28ms, 33.5MB)
테스트 7 〉	통과 (0.34ms, 33.5MB)
테스트 8 〉	통과 (0.43ms, 33.5MB)
테스트 9 〉	통과 (0.16ms, 33.6MB)
테스트 10 〉	통과 (0.28ms, 33.5MB)
테스트 11 〉	통과 (0.24ms, 33.5MB)
테스트 12 〉	통과 (0.19ms, 33.5MB)
테스트 13 〉	통과 (0.23ms, 33.5MB)
테스트 14 〉	통과 (0.08ms, 33.5MB)
테스트 15 〉	통과 (0.08ms, 33.5MB)
테스트 16 〉	통과 (0.21ms, 33.5MB)
테스트 17 〉	통과 (0.31ms, 33.6MB)
테스트 18 〉	통과 (0.16ms, 33.5MB)
테스트 19 〉	통과 (0.35ms, 33.5MB)
테스트 20 〉	통과 (0.21ms, 33.5MB)

3. 기타 의견
문제 지문대로 그대로 풀어서 쉽게 풀 수 있는데 어렵게 푼 것 같습니다..
다른 팀원들의 코드를 보면서 배워야 할 점이 많은 것 같습니다.
아직 코테 문제 푸는 데 시간이 오래 걸려서,
연습을 통해서 시간을 줄일 수 있도록 노력해야겠습니다!

4. 참고 링크
splice vs shift 속도 차이
https://velog.io/@dorito/JavaScript-Splice-vs-Shift-%EC%86%8D%EB%8F%84-%EC%B0%A8%EC%9D%B4-%EA%B6%81%EA%B8%88%ED%95%B4%EC%84%9C-%EA%B5%AC%EA%B8%80%EB%A7%81-z9aiz4b1
*/
