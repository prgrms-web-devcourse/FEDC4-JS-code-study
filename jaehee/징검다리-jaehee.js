function solution(distance, rocks, n) {
  // n개 제거 뒤 각 지점 사이 거리 최솟값 중 가장 큰 값 return
  // -> n번으로 각 지점 거리의 최솟값 x를 만들 수 있나? 의 반복을 통해 최대값 반환
  let answer = 0;

  rocks.sort((a, b) => a - b);

  let past = 0;
  const fars = rocks.map((v) => {
    const value = v - past;
    past = v;
    return value;
  });
  fars.push(distance - rocks.at(-1));

  let start = 0;
  let end = distance;

  const canGetMinValueByN = (minFarLength) => {
    // 최솟값의 최댓값이 minFarLength임을 확정하고 안되는 경우를 생각하면 됨!!
    // n개 제거 후 최솟값의 최댓값이 minFarLength보다 작은 경우
    // 거리 중 minFarLength 보다 작은게 있으면 양쪽 중 하나랑 병합 -> n번 초과로 해야하면 false
    let count = n;
    let flag = 0; // 처리해야하는 남은 거리를 저장
    for (let i = 0; i < fars.length; i++) {
      let now = fars[i];
      // 2 -5 1 1 0 0
      if (minFarLength - now > 0) {
        flag += now;
        count -= 1;
      } else {
        flag = 0;
      }
      // 처리해야할 남은 거리가 있고, minFarLength보다 커지면 통과
      if (flag >= minFarLength && flag !== 0) {
        flag = 0;
        count += 1;
      }
      if (count < 0) return false;
    }
    return true;
  };

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (canGetMinValueByN(mid)) {
      start = mid + 1;
      answer = Math.max(mid, answer);
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
금요일에 본 가방 문제와 비슷한 면이 있었던 것 같아요.
생각의 흐름은 주석을 달아놨습니다.

2. 시간 복잡도 or 결과
O(nlogn)

테스트 1 〉	통과 (0.44ms, 33.5MB)
테스트 2 〉	통과 (0.40ms, 33.5MB)
테스트 3 〉	통과 (0.43ms, 33.6MB)
테스트 4 〉	통과 (5.78ms, 36MB)
테스트 5 〉	통과 (5.63ms, 35.9MB)
테스트 6 〉	통과 (22.86ms, 39.4MB)
테스트 7 〉	통과 (24.90ms, 39.7MB)
테스트 8 〉	통과 (27.20ms, 39.6MB)
테스트 9 〉	통과 (0.20ms, 33.6MB)
테스트 10 〉	통과 (0.23ms, 33.6MB)
테스트 11 〉	통과 (0.27ms, 33.4MB)
테스트 12 〉	통과 (0.22ms, 33.5MB)
테스트 13 〉	통과 (0.21ms, 33.5MB)
테스트 14 〉	통과 (0.23ms, 33.5MB)
테스트 15 〉	통과 (0.20ms, 33.5MB)
테스트 16 〉	통과 (0.23ms, 33.5MB)
테스트 17 〉	통과 (0.25ms, 33.6MB)
테스트 18 〉	통과 (0.23ms, 33.5MB)
테스트 19 〉	통과 (0.23ms, 33.5MB)
테스트 20 〉	통과 (22.64ms, 38.7MB)
테스트 21 〉	통과 (4.49ms, 35.8MB)
테스트 22 〉	통과 (18.68ms, 39.1MB)
테스트 23 〉	통과 (16.02ms, 37.8MB)
테스트 24 〉	통과 (26.05ms, 39.4MB)
테스트 25 〉	통과 (5.17ms, 35.9MB)
테스트 26 〉	통과 (12.90ms, 36.9MB)
테스트 27 〉	통과 (16.40ms, 37.5MB)
테스트 28 〉	통과 (4.35ms, 35.8MB)
테스트 29 〉	통과 (6.91ms, 36.2MB)
테스트 30 〉	통과 (11.63ms, 37MB)
테스트 31 〉	통과 (21.74ms, 38.9MB)
테스트 32 〉	통과 (5.04ms, 35.8MB)
테스트 33 〉	통과 (16.00ms, 37.6MB)
테스트 34 〉	통과 (26.95ms, 39.6MB)
테스트 35 〉	통과 (4.51ms, 35.7MB)
테스트 36 〉	통과 (12.56ms, 37.1MB)
테스트 37 〉	통과 (2.21ms, 35.6MB)
테스트 38 〉	통과 (2.20ms, 35.6MB)
테스트 39 〉	통과 (20.31ms, 39.9MB)

3. 기타 의견 

4. 참고 링크

*/
