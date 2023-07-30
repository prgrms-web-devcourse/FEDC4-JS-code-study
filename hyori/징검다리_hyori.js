function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b)
  rocks.push(distance)

  let left = 0
  let right = distance
  let answer = 0

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let prevRock = 0
    let removedRocks = 0
    let minDistance = 1000000000

    for (const rock of rocks) {
      const diff = rock - prevRock
      if (diff < mid) {
        removedRocks++
      } else {
        minDistance = Math.min(minDistance, diff)
        prevRock = rock
      }
    }

    if (removedRocks > n) {
      right = mid - 1
      continue
    }

    answer = minDistance
    left = mid + 1
  }

  return answer
}

/*
1. 알고리즘 or 자료구조 선택 이유
이분탐색

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.43ms, 33.6MB)
테스트 2 〉	통과 (0.48ms, 33.5MB)
테스트 3 〉	통과 (0.42ms, 33.6MB)
테스트 4 〉	통과 (10.57ms, 37MB)
테스트 5 〉	통과 (11.91ms, 37.1MB)
테스트 6 〉	통과 (37.46ms, 42.3MB)
테스트 7 〉	통과 (40.67ms, 42.5MB)
테스트 8 〉	통과 (45.95ms, 42.4MB)
테스트 9 〉	통과 (0.19ms, 33.6MB)
테스트 10 〉	통과 (0.19ms, 33.6MB)
테스트 11 〉	통과 (0.27ms, 33.5MB)
테스트 12 〉	통과 (0.26ms, 33.5MB)
테스트 13 〉	통과 (0.10ms, 33.6MB)
테스트 14 〉	통과 (0.29ms, 33.4MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.31ms, 33.5MB)
테스트 17 〉	통과 (0.23ms, 33.6MB)
테스트 18 〉	통과 (0.33ms, 33.2MB)
테스트 19 〉	통과 (0.31ms, 33.5MB)
테스트 20 〉	통과 (44.87ms, 40.6MB)
테스트 21 〉	통과 (15.52ms, 38MB)
테스트 22 〉	통과 (42.34ms, 38.7MB)
테스트 23 〉	통과 (40.86ms, 38.4MB)
테스트 24 〉	통과 (69.89ms, 42.3MB)
테스트 25 〉	통과 (12.99ms, 37.9MB)
테스트 26 〉	통과 (23.61ms, 38MB)
테스트 27 〉	통과 (31.81ms, 38.4MB)
테스트 28 〉	통과 (7.60ms, 37.6MB)
테스트 29 〉	통과 (27.10ms, 37.6MB)
테스트 30 〉	통과 (23.27ms, 37.9MB)
테스트 31 〉	통과 (57.07ms, 41.8MB)
테스트 32 〉	통과 (9.92ms, 37.7MB)
테스트 33 〉	통과 (28.48ms, 38.3MB)
테스트 34 〉	통과 (52.16ms, 42.3MB)
테스트 35 〉	통과 (10.49ms, 37.6MB)
테스트 36 〉	통과 (24.46ms, 38MB)
테스트 37 〉	통과 (4.52ms, 37.3MB)
테스트 38 〉	통과 (9.50ms, 37.6MB)
테스트 39 〉	통과 (34.08ms, 40.7MB)

3. 기타 의견
특정 거리를 정하고, 그 거리 크기 기준 제거하는 바위 개수를 구해서 n과 비교하며 이분탐색을 하는 풀이 방식은 잘 생각해냈는데, 
바위 사이 거리를 합치는 구현이 어려웠고,
<= 나 <의 차이에서 자꾸 테스트 케이스 실패가 떠서 결국 답을 참고했습니다.
최신 테케에 맞는 풀이가 없어서, gpt에게 도움을 요청했습니다 ...
사실 아직도 100% 이해가 되진 않은 것 같아요.

4. 참고 링크
*/
