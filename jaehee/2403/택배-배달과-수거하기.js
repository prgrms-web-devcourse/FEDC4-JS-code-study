function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  let spare = cap;
  let picks = cap;

  let di = n - 1;
  let pi = n - 1;

  let far = n;

  while (di >= 0 || pi >= 0) {
    const ds = deliveries[di] ?? 0;
    const ps = pickups[pi] ?? 0;

    if (spare === cap && picks === cap) {
      far = Math.max(pi + 1, di + 1);
    }

    if (ds > spare) {
      deliveries[di] -= spare;
      spare = 0;
    } else {
      deliveries[di] = 0;
      spare -= ds;
      di--;
    }

    if (ps > picks) {
      pickups[pi] -= picks;
      picks = 0;
    } else {
      pickups[pi] = 0;
      picks -= ps;
      pi--;
    }

    console.log(...deliveries, "/", ...pickups, "/", answer);

    if (spare === 0) {
      spare = cap;
      answer += far * 2;
      spare = cap;
      picks = cap;
    }
    if (picks === 0) {
      picks = cap;
      answer += far * 2;
      spare = cap;
      picks = cap;
    }
  }

  return answer;
}

// 틀림
