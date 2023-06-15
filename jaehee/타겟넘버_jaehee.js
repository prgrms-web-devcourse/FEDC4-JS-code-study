function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  function getAnswer(time, value) {
    if (time === n) {
      if (value === target) answer += 1;
      return;
    }
    time++;
    getAnswer(time, value + numbers[time - 1]);
    getAnswer(time, value - numbers[time - 1]);
  }
  getAnswer(0, 0);
  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제의 주어진 조건이 모든 경우의 수를 구해도 문제가 없기 때문에 각 숫자에 대해 확인하는 재귀함수를 사용했습니다.
DFS라고 볼 수 있으나... 조건이 매우 단순해 애매한 것 같습니다.

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (14.38ms, 35.4MB)
테스트 2 〉	통과 (13.64ms, 35.5MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.38ms, 33.6MB)
테스트 5 〉	통과 (2.15ms, 35.6MB)
테스트 6 〉	통과 (0.27ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.4MB)
테스트 8 〉	통과 (1.03ms, 35.5MB)

O(2^n)

3. 기타 의견 

4. 참고 링크

*/
