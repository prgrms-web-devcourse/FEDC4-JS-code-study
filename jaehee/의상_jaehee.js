function solution(clothes) {
  let answer = 1;
  const closet = {};

  // clothes 배열 순회하며 각 의상의 종류별로 객체에 저장
  clothes.forEach((cloth) => {
    closet[cloth[1]]
      ? closet[cloth[1]].push(cloth[0])
      : (closet[cloth[1]] = [cloth[0]]);
  });

  // 의상의 종류별로 입지 않는 경우를 포함하여 경우의 수 계산
  Object.values(closet).forEach((v) => (answer *= v.length + 1));

  // 모든 의상을 입지 않는 경우 제외
  return answer - 1;
}

/*
1. 알고리즘 or 자료구조 선택 이유
문제가 의상의 종류를 기준으로 의상을 입는 경우의 수를 구하는 문제이므로, 의상의 종류별로 의상을 저장할 수 있는 자료구조가 필요하다고 생각했습니다.

2. 시간 복잡도 or 결과
시간 복잡도: O(n), 배열, 객체 순회

3. 기타 의견 
단순히 객체 리터럴을 사용해 객체 자료형을 사용했는데, Map 등 다른 자료형을 시도해봐도 좋을 것 같습니다. 
이에 익숙치 않아서 객체만 사용하게 되는데, 차이를 정확히 파악하고 적절한 자료형을 사용할 수 있도록 연습해야겠습니다.

4. 참고 링크

*/
