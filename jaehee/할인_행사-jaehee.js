function solution(want, number, discount) {
  let answer = 0;
  const want_obj = {}; // 조건에 일치하는 최소조건
  const current_obj = {}; // 현재 상황

  want.forEach((v, i) => {
    want_obj[v] = number[i];
    current_obj[v] = 0;
  });

  // 답에 부합하는지 확인
  const validate = (target, cur) => {
    return Object.keys(target).every((key) => target[key] <= cur[key]);
  };

  // 첫 10개 대상 입력 및 확인
  for (let i = 0; i < 10; i++) {
    current_obj[discount[i]] += 1;
  }
  if (validate(want_obj, current_obj)) answer++;

  // 하루 경과마다 품목 갱신 후 체크
  for (let i = 1; i < discount.length - 9; i++) {
    current_obj[discount[i - 1]] -= 1;
    current_obj[discount[i + 9]] += 1;
    if (validate(want_obj, current_obj)) answer++;
  }

  return answer;
}

//24m

/*
1. 알고리즘 or 자료구조 선택 이유
- 조건에 일치하는 최소조건을 객체에 담고 현재와 비교하면서 답을 구했습니다.
- 하루마다의 품목 갱신은 사라진 품목을 빼고 새로운 품목을 더하는 방식으로 구현했습니다.

2. 시간 복잡도 or 결과
O(discount.length * want.length)

테스트 1 〉	통과 (6.25ms, 37.3MB)
테스트 2 〉	통과 (15.74ms, 40MB)
테스트 3 〉	통과 (7.16ms, 37.7MB)
테스트 4 〉	통과 (15.99ms, 39.7MB)
테스트 5 〉	통과 (10.95ms, 39.2MB)
테스트 6 〉	통과 (3.58ms, 36.8MB)
테스트 7 〉	통과 (8.37ms, 37.6MB)
테스트 8 〉	통과 (17.58ms, 42.2MB)
테스트 9 〉	통과 (7.09ms, 37.9MB)
테스트 10 〉	통과 (12.03ms, 39.8MB)
테스트 11 〉	통과 (6.24ms, 37.1MB)
테스트 12 〉	통과 (0.11ms, 33.6MB)

3. 기타 의견 

4. 참고 링크

*/
