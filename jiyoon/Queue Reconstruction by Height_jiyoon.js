/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  const result = [];

  // 자신의 키보다 크거나 같은 사람들의 수로 오름차순 정렬하되, 같을시에는 키 순으로 오름차순 정렬
  people.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  for (let i = 0; i < people.length; i++) {
    const personHeight = people[i][0];
    const higherOrSameCnt = people[i][1];
    let cnt = 0; // 현재 사람보다 크거나 같은 키를 가진 사람의 수
    let j = 0; // result 탐색 인덱스
    for (j; j < result.length; j++) {
      const resultHeight = result[j][0];
      const resHigherOrSameCnt = result[j][1];
      // 사람의 키보다 result 배열에 담긴 키가 크거나 같으면 cnt 증가
      if (resultHeight >= personHeight) {
        cnt++;
      }
      // cnt의 값 > 자신의 키보다 크거나 같은 사람들의 수이면 종료
      if (cnt > higherOrSameCnt) {
        break;
      }
    }
    // result배열 j번째에 요소 추가
    result.splice(j, 0, people[i]);
  }

  return result;
};

/*
1. 알고리즘 or 자료구조 선택 이유
문제 카테고리는 그리디로 최적의 해를 찾는 문제 같습니다

2. 시간 복잡도 or 결과
O(n^2) 
Runtime - 97ms 61.84%
Memory - 47.4MB 86.84%

3. 기타 의견
그리디 알고리즘이라고 정확하게 와닿지는 않는 것 같아요..
팁이 있으시다면 공유해 주세요!

4. 참고 링크

*/
