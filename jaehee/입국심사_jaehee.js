function solution(n, times) {
  let start = 0;
  times.sort((a, b) => a - b);
  let end = times[times.length - 1] * n;
  let answer = end;

  while (start <= end) {
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

// 50m
