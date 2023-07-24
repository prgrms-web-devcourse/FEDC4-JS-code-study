// 2023.07.22 15:11~16:23
function solution(s) {
  const map = new Map();
  // 테스트 케이스 5
  if (s.length === 1) {
    return 1;
  }
  // i개 단위로 자르고 map에다가 배열로 저장
  for (let i = 1; i <= s.length; i++) {
    const arr = [];
    for (let j = 0; j < s.length; j += i) {
      const str = s.substring(j, j + i);
      arr.push(str);
    }
    if (arr.length > 1) {
      map.set(i, arr);
    }
  }
  // 같은 문자열이 있으면 temp 배열에 ''로 넣고, cnt를 증가시켜서 temp 배열에 넣습니다.
  // 같은 문자열이 없으면 문자를 temp에 넣고, cnt = 1인데, pass 시킵니다.
  let minLength = Infinity;
  for (const values of map.values()) {
    let temp = [];
    let cnt = 1;
    for (let i = 0; i < values.length; i++) {
      if (values[i] == values[i + 1]) {
        temp.push('');
        cnt++;
      } else {
        temp.push(values[i]);
        if (cnt === 1) {
          continue;
        }
        temp.push(String(cnt));
        cnt = 1;
      }
    }
    // 가장 짧은 길이 구하기
    let newLength = temp.join('').length;
    minLength = minLength > newLength ? newLength : minLength;
  }
  return minLength;
}

/*
1. 알고리즘 or 자료구조 선택 이유
map과 배열을 이용한 혼돈의 풀이..

2. 시간 복잡도 or 결과
O((s길이)^2) 
테스트 1 〉	통과 (0.26ms, 33.6MB)
테스트 2 〉	통과 (0.81ms, 33.7MB)
테스트 3 〉	통과 (0.41ms, 33.5MB)
테스트 4 〉	통과 (0.39ms, 33.6MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.27ms, 33.4MB)
테스트 7 〉	통과 (0.76ms, 33.7MB)
테스트 8 〉	통과 (1.23ms, 33.8MB)
테스트 9 〉	통과 (0.83ms, 33.7MB)
테스트 10 〉	통과 (3.70ms, 34.9MB)
테스트 11 〉	통과 (0.35ms, 33.5MB)
테스트 12 〉	통과 (0.47ms, 33.5MB)
테스트 13 〉	통과 (0.55ms, 33.4MB)
테스트 14 〉	통과 (0.84ms, 33.7MB)
테스트 15 〉	통과 (0.34ms, 33.6MB)
테스트 16 〉	통과 (0.22ms, 33.4MB)
테스트 17 〉	통과 (1.50ms, 34.3MB)
테스트 18 〉	통과 (1.28ms, 34.4MB)
테스트 19 〉	통과 (2.02ms, 34.2MB)
테스트 20 〉	통과 (3.93ms, 35.2MB)
테스트 21 〉	통과 (4.04ms, 35.3MB)
테스트 22 〉	통과 (3.97ms, 35.3MB)
테스트 23 〉	통과 (4.32ms, 35.2MB)
테스트 24 〉	통과 (3.81ms, 35.1MB)
테스트 25 〉	통과 (4.30ms, 35.3MB)
테스트 26 〉	통과 (7.18ms, 35.1MB)
테스트 27 〉	통과 (4.06ms, 35.3MB)
테스트 28 〉	통과 (0.22ms, 33.6MB)

3. 기타 의견
어렵게 푼 것 같네요..
테케 5번에서만 에러 나서 확인을 해보니..
문자열이 1개 들어올 때, 처리를 안 해줬어요 ㅜ

4. 참고 링크
5번 테케: https://school.programmers.co.kr/questions/20870
*/
