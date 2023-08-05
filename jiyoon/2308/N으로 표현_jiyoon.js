// 1:30~2:15
function solution(N, number) {
  // 1번~8번으로 만들어야 함
  const arr = new Array(8).fill();
  const set = arr.map(() => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(Number(String(N).repeat(i + 1)));
    // set(1) {5} , set(1){55}, set(1){555} ...
    // i = 2 일 때,
    for (let j = 0; j < i; j++) {
      for (const first of set[j]) {
        // first: set[0] = 5, second: set[1] = {55, 10, 0, 25, 1}, set[0] = 5에 대해서 계산
        for (const second of set[i - j - 1]) {
          set[i].add(first + second);
          set[i].add(first - second);
          set[i].add(first * second);
          set[i].add(Math.floor(first / second));
        }
        // Set(19) {555,60,-50,275,0,15,-5,50,5,Infinity,30,-20,125,6,4,11,2,20,-4},
      }
    }
    // 19개 중에서 number와 같은 값이 있나
    if (set[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
/*
1. 알고리즘 or 자료구조 선택 이유
dp

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (1.34ms, 33.7MB)
테스트 2 〉	통과 (0.10ms, 33.4MB)
테스트 3 〉	통과 (0.10ms, 33.4MB)
테스트 4 〉	통과 (22.65ms, 39.3MB)
테스트 5 〉	통과 (15.50ms, 38.8MB)
테스트 6 〉	통과 (0.36ms, 33.6MB)
테스트 7 〉	통과 (0.55ms, 33.5MB)
테스트 8 〉	통과 (17.08ms, 39MB)
테스트 9 〉	통과 (0.09ms, 33.5MB)

3. 기타 의견
1. i는 횟수로 사칙연산이 1번에서 8번이다. & 중복되는 사칙연산 결과를 제외하자 -> set 사용
2. 처음 값을 넣어줘야 한다. 5, 55, 555와 같은.. -> 문자열로 변환 후, repeat 사용
3. 이전 set을 참고하면서 사칙연산을 진행
4. number와 같다면, i 값 증가


4. 참고 링크


*/
