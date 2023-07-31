function solution(distance, rocks, n) {
  /* 파라매트릭 서치 보통 2가지 조건으로 나눌 수 있다
  1. 첫번 째, 조건은 while문으로 해결
  2. 두번 째, 조건은 함수만들어서 해결
   n개 제거 뒤 각 지점 사이 거리 최솟값 중 가장 큰 값 return
   1. 가장 큰 값은 while문에서 처리
   2. n개 제거 뒤 각 지전 사이 거리 최솟값, 
   확정지을 수 있는게 뭘까? -> n번은 고정, n번으로 했을 때, 각 지점 사이의 최솟값 x를 만들 수 있을까?
   예, 아니오의 반복
   -> n번으로 각 지점 거리의 최솟값 x를 만들 수 있나? 의 반복을 통해 최대값 반환*/
  var answer = 0;
  let st = 1;
  let en = distance;
  rocks.sort((a, b) => a - b);
  while (st <= en) {
    const mid = Math.floor((st + en) / 2); // 각 바위 사위의 거리의 최솟값으로 가정
    const rmRockCount = count(rocks, mid, distance);
    if (rmRockCount <= n) {
      answer = Math.max(answer, mid);
      st = mid + 1;
    } else en = mid - 1;
  }
  return answer;
}

function count(rocks, mid, distance) {
  let prev = 0;
  let cnt = 0;
  for (let i = 0; i < rocks.length; i++) {
    // 바위 사이의 거리가 중간값보다 작으면? 해당 바위를 깸
    if (rocks[i] - prev < mid) cnt++;
    // 중간값과 같거나 크면? 각 바위 사이의 거리의 최솟값은 중간값이 되므로 바위를 깨지 않음
    // 바위를 깨지 않았으므로 이전 바위를 현재 바위로 둠
    else prev = rocks[i];
  }
  // 마지막으로 distance에서 이전 바위까지의 거리를 구한 후, 중간값보다 작으면 바위를 깸
  if (distance - prev < mid) cnt++;
  return cnt;
}
/*
1. 알고리즘 or 자료구조 선택 이유
이분탐색

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.26ms, 33.4MB)
테스트 2 〉	통과 (0.39ms, 33.5MB)
테스트 3 〉	통과 (0.39ms, 33.5MB)
테스트 4 〉	통과 (11.56ms, 35.9MB)
테스트 5 〉	통과 (6.41ms, 35.9MB)
테스트 6 〉	통과 (32.78ms, 39.2MB)
테스트 7 〉	통과 (49.66ms, 39.4MB)
테스트 8 〉	통과 (35.85ms, 39.3MB)
테스트 9 〉	통과 (0.07ms, 33.5MB)
테스트 10 〉	실패 (0.16ms, 33.6MB)
테스트 11 〉	실패 (0.20ms, 33.5MB)
테스트 12 〉	실패 (0.19ms, 33.5MB)
테스트 13 〉	실패 (0.11ms, 33.5MB)
테스트 14 〉	실패 (0.17ms, 33.5MB)
테스트 15 〉	실패 (0.10ms, 33.5MB)
테스트 16 〉	실패 (0.17ms, 33.5MB)
테스트 17 〉	통과 (0.28ms, 33.5MB)
테스트 18 〉	실패 (0.21ms, 33.5MB)
테스트 19 〉	실패 (0.16ms, 33.5MB)
테스트 20 〉	통과 (25.88ms, 38.6MB)
테스트 21 〉	실패 (8.57ms, 36.8MB)
테스트 22 〉	통과 (29.87ms, 37.6MB)
테스트 23 〉	실패 (18.62ms, 37.4MB)
테스트 24 〉	통과 (35.49ms, 39.3MB)
테스트 25 〉	실패 (7.26ms, 36.8MB)
테스트 26 〉	통과 (18.53ms, 36.6MB)
테스트 27 〉	실패 (17.40ms, 37.1MB)
테스트 28 〉	통과 (7.60ms, 36.8MB)
테스트 29 〉	통과 (9.11ms, 36.1MB)
테스트 30 〉	실패 (14.15ms, 36.6MB)
테스트 31 〉	실패 (23.26ms, 38.7MB)
테스트 32 〉	실패 (7.05ms, 36.7MB)
테스트 33 〉	실패 (16.84ms, 37.2MB)
테스트 34 〉	실패 (36.36ms, 39.3MB)
테스트 35 〉	실패 (6.10ms, 36.7MB)
테스트 36 〉	통과 (14.98ms, 36.9MB)
테스트 37 〉	통과 (3.00ms, 36.6MB)
테스트 38 〉	실패 (4.53ms, 36.8MB)
테스트 39 〉	통과 (23.52ms, 38.5MB)

3. 기타 의견
테케 통과를 다 못했습니다..
답이랑 비슷하게 푼 것 같은데, 살짝 다르네요

//1h26m
function solution(distance, rocks, n) {
  // 실패..
  let answer = 0;
  rocks.sort((a, b) => a - b);
  let left = 1; // 거리 최소 1
  let right = distance; // 거리 최대 10억인데, distance로 대체

  function cntRemovedRocks(minDistance) {
    let removedRocks = 0; // 제거되는 돌 개수
    let front = 0; // 첫 위치
    for (let i = 0; i < rocks.length; i++) {
      // 현재 위치 돌 - 가장 가까운 돌 <= mid 보다 작거나 같으면 => 제거 가능
      if (rocks[i] - front <= minDistance) {
        removedRocks++;
      } else {
        // mid보다 크면 제거 불가능 -> 이전 위치로 갱신
        front = rocks[i];
      }
    }
    return removedRocks;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 거리 최소값의 후보
    if (cntRemovedRocks(mid) > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer = Math.max(answer, left);
    }
  }
  return answer;
}

4. 참고 링크
https://blog.naver.com/PostView.naver?blogId=diddnjs02&logNo=222316363621&parentCategoryNo=&categoryNo=78&viewDate=&isShowPopularPosts=true&from=search
*/
