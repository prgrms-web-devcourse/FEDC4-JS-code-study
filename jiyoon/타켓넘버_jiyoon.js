// 2023.06.15 13:20~13:48
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  // dfs
  // index로 깊이 들어감
  const dfs = (index, sum) => {
    if (index === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };
  dfs(0, 0);
  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
dfs - numbers의 배열을 더하거나 빼서 target 값을 구하는 문제 이므로 +,- 이진트리를 생각해서 가능한 경우의 수를 전부 찾습니다. 

2. 시간 복잡도 or 결과
시간복잡도: O(2^n)

테스트 1 〉	통과 (46.78ms, 36.4MB)
테스트 2 〉	통과 (37.12ms, 36.5MB)
테스트 3 〉	통과 (0.23ms, 33.5MB)
테스트 4 〉	통과 (0.41ms, 33.5MB)
테스트 5 〉	통과 (25.75ms, 36.4MB)
테스트 6 〉	통과 (0.27ms, 33.3MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (1.09ms, 35.5MB)


3. 기타 의견
코테에 dfs, BFS가 자주 출제된다고 해서 꼭 익혀야 하는 알고리즘이라고 생각합니다.

4. 참고 링크

*/
