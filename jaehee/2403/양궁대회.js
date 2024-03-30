function solution(n, info) {
  let answer = [];
  const cur = Array.from({ length: 11 }, () => 0);
  let currentSum = -1;

  const getScore = (scores) => {
    let lion = 0;
    let appeach = 0;

    for (let i = 0; i < 11; i++) {
      if (scores[i] > info[i]) {
        lion += 10 - i;
      } else if (info[i] > 0) {
        appeach += 10 - i;
      }
    }

    if (lion <= appeach) return -1;
    return lion;
  };

  const shoot = (target, spare, current) => {
    if (spare < 0) return;
    if (spare === 0 || target >= 11) {
      const res = getScore(current);
      if (res !== -1 && currentSum <= res) {
        if (spare !== 0) {
          current[10] = spare;
        }
        currentSum = res;
        if (answer.length === 0) {
          answer = [...current];
          current[10] -= spare;
          return;
        }
        for (let i = 10; i >= 0; i--) {
          if (current[i] > answer[i]) {
            answer = [...current];
            current[10] -= spare;
            return;
          }
        }
      }
      return;
    }

    current[target] += info[target] + 1;
    shoot(target + 1, spare - (info[target] + 1), current);
    current[target] -= info[target] + 1;

    shoot(target + 1, spare, current);
  };

  shoot(0, n, cur);

  return answer.length ? answer : [-1];
}
/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.6MB)
테스트 2 〉	실패 (1.47ms, 35.4MB)
테스트 3 〉	실패 (1.42ms, 35.6MB)
테스트 4 〉	실패 (0.55ms, 33.7MB)
테스트 5 〉	실패 (1.55ms, 35.5MB)
테스트 6 〉	실패 (2.43ms, 35.6MB)
테스트 7 〉	실패 (0.55ms, 33.4MB)
테스트 8 〉	통과 (0.36ms, 33.6MB)
테스트 9 〉	실패 (0.58ms, 33.5MB)
테스트 10 〉	실패 (0.37ms, 33.5MB)
테스트 11 〉	실패 (0.43ms, 33.4MB)
테스트 12 〉	실패 (0.45ms, 33.6MB)
테스트 13 〉	실패 (0.84ms, 33.5MB)
테스트 14 〉	실패 (1.38ms, 35.6MB)
테스트 15 〉	실패 (1.50ms, 35.5MB)
테스트 16 〉	실패 (0.67ms, 33.5MB)
테스트 17 〉	실패 (0.62ms, 33.6MB)
테스트 18 〉	통과 (0.29ms, 33.5MB)
테스트 19 〉	통과 (0.26ms, 33.4MB)
테스트 20 〉	통과 (1.40ms, 35.4MB)
테스트 21 〉	실패 (2.26ms, 35.5MB)
테스트 22 〉	통과 (1.48ms, 35.5MB)
테스트 23 〉	통과 (0.35ms, 33.6MB)
테스트 24 〉	통과 (1.55ms, 35.4MB)
테스트 25 〉	통과 (1.55ms, 35.5MB)
채점 결과
정확성: 42.9
합계: 42.9 / 100.0

3. 기타 의견
정답일 때 더 적합한 케이스에 대해 잘못 나눴나...

4. 참고 링크

*/
