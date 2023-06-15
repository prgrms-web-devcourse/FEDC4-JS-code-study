function solution(n, times) {
  let start = 0;
  times.sort((a, b) => a - b);
  let end = times[times.length - 1] * n;
  let answer = end;

  while (start <= end) {
    // 탈출 조건
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    times.forEach((v) => {
      count += Math.floor(mid / v);
    });
    if (count >= n) {
      answer = Math.min(answer, mid);
    }

    // mid 시간 안에 n 명 이상 가능 -> end = mid-1
    if (n <= count) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제의 주어진 조건이 엄격하기 때문에 logN의 시간복잡도를 가지는 이분탐색을 사용했습니다.

2. 시간 복잡도 or 결과
O(MlogN) (M: times의 길이, N: 시간 최대값)

3. 기타 의견 
수업 중에 나왔을 때도 틀렸던 문제인데 이번에도 한참 헤맸습니다. 이분탐색을 사용하는 것은 알았지만
파라메트릭 서치로 찾는 값의 기준을 바꾸는 것이 아직도 익숙하지 않은 것 같습니다. 관련 문제를 더 풀어봐야겠습니다.

4. 참고 링크

*/
