"use strict";
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer; // 정답
}
/*
1. 알고리즘 or 자료구조 선택 이유
- 각 자료에 대해서 할 수 있는 경우의 수가 2가지 씩 필요했다. 
- 위 이유 때문에, 이진트리가 생각이 났고, 
- 합은 모든 가능성을 다 봐줘야 하기 때문에, 완전탐색 
- 완전탐색 + 트리 => DFS로 풀었다. 

2. 시간 복잡도 or 결과
정확성  테스트
테스트 1 〉	통과 (14.90ms, 35.5MB)
테스트 2 〉	통과 (14.74ms, 35.6MB)
테스트 3 〉	통과 (0.31ms, 33.5MB)
테스트 4 〉	통과 (0.38ms, 33.5MB)
테스트 5 〉	통과 (1.78ms, 35.5MB)
테스트 6 〉	통과 (0.24ms, 33.5MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.96ms, 35.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0

3. 기타 의견 

4. 참고 링크

*/
