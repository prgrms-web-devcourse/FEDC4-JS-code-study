const xs = [0, 0, -1, 1];
const ys = [-1, 1, 0, 0];

const getLocation = (loc, target, maxLoc, queries, type) => {
  for (let query of queries) {
    const [command, dx] = query;
    const newLoc = loc + (type === "n" ? xs[command] * dx : ys[command] * dx);
    if (newLoc < 0) {
      loc = 0;
    } else if (newLoc > maxLoc) {
      loc = maxLoc;
    } else {
      loc = newLoc;
    }
  }

  return loc;
};

function solution(n, m, x, y, queries) {
  const nQueries = queries.filter(
    ([command, time]) => command === 2 || command === 3
  );
  const mQueries = queries.filter(
    ([command, time]) => command === 0 || command === 1
  );

  let ns = 0;
  let ne = n - 1;
  let ms = 0;
  let me = m - 1;

  let start = 0;
  let end = n - 1;
  let mid = 0;

  let noHitN = true;
  let noHitM = true;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const res = getLocation(mid, x, n - 1, nQueries, "n");
    if (res === x) {
      noHitN = false;
      if (x !== getLocation(mid - 1, x, n - 1, nQueries, "n")) {
        ns = mid;
        break;
      }
      end = mid - 1;
    } else if (res < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = n - 1;
  mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const res = getLocation(mid, x, n - 1, nQueries, "n");
    if (res === x) {
      noHitN = false;
      if (x !== getLocation(mid + 1, x, n - 1, nQueries, "n")) {
        ne = mid;
        break;
      }
      start = mid + 1;
    } else if (res > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = m - 1;
  mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const res = getLocation(mid, y, m - 1, mQueries, "m");
    if (res === y) {
      noHitM = false;
      if (y !== getLocation(mid - 1, y, m - 1, mQueries, "m")) {
        ms = mid;
        break;
      }
      end = mid - 1;
    } else if (res < y) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = m - 1;
  mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const res = getLocation(mid, y, m - 1, mQueries, "m");
    if (res === y) {
      noHitM = false;
      if (y !== getLocation(mid + 1, y, m - 1, mQueries, "m")) {
        me = mid;
        break;
      }
      start = mid + 1;
    } else if (res > y) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (noHitN || noHitM) {
    return 0;
  }

  return (ne + 1 - ns) * (me + 1 - ms);
}

/*
1. 알고리즘 or 자료구조 선택 이유
이진탐색

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.30ms, 33.4MB)
테스트 2 〉	통과 (25.95ms, 37.8MB)
테스트 3 〉	통과 (5.50ms, 38.3MB)
테스트 4 〉	통과 (7.65ms, 38.3MB)
테스트 5 〉	통과 (83.06ms, 59.4MB)
테스트 6 〉	통과 (376.44ms, 97.2MB)
테스트 7 〉	실패 (241.76ms, 82.6MB)
테스트 8 〉	통과 (226.97ms, 82MB)
테스트 9 〉	실패 (225.37ms, 87.1MB)
테스트 10 〉	통과 (246.52ms, 77.1MB)
테스트 11 〉	통과 (144.30ms, 69.9MB)
테스트 12 〉	통과 (261.99ms, 84.3MB)
테스트 13 〉	통과 (229.70ms, 83MB)
테스트 14 〉	통과 (164.89ms, 84.8MB)
테스트 15 〉	통과 (163.54ms, 98.1MB)
테스트 16 〉	통과 (203.11ms, 96.9MB)
테스트 17 〉	통과 (265.45ms, 97.2MB)
테스트 18 〉	통과 (273.65ms, 96.8MB)
테스트 19 〉	통과 (217.29ms, 96.5MB)
테스트 20 〉	통과 (285.22ms, 96.6MB)
테스트 21 〉	통과 (259.01ms, 95.9MB)
테스트 22 〉	통과 (350.68ms, 97.1MB)
테스트 23 〉	통과 (341.07ms, 96.3MB)
테스트 24 〉	통과 (274.94ms, 96.7MB)
테스트 25 〉	통과 (9.36ms, 38.4MB)
테스트 26 〉	통과 (16.64ms, 39.1MB)
테스트 27 〉	통과 (13.81ms, 38.3MB)
테스트 28 〉	통과 (3.95ms, 37.6MB)
테스트 29 〉	통과 (8.40ms, 38.2MB)
테스트 30 〉	통과 (7.16ms, 38MB)
테스트 31 〉	통과 (6.57ms, 38.1MB)
테스트 32 〉	통과 (29.49ms, 37.9MB)
테스트 33 〉	통과 (181.76ms, 95MB)
테스트 34 〉	통과 (100.68ms, 62.1MB)

3. 기타 의견 
이진탐색을 사용해 풀었는데, 테케 2개가 통과 안된다ㅠㅠ

4. 참고 링크

*/
