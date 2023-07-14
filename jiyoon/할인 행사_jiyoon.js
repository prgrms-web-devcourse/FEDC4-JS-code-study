// 2023.07.12 14:45~15:26
function solution(want, number, discount) {
  let days = 0;
  for (let i = 0; i < discount.length; i++) {
    let numberOfItemType = 0;
    // 10개씩 자름
    const tenItems = [...discount].slice(i, i + 10);
    for (let j = 0; j < want.length; j++) {
      // 10개씩 자른 tenItems 배열의 각 상품의 개수를 셈
      const eachItemCnt = [...tenItems].filter((item) => item === want[j]).length;
      // 상품의 각 개수
      const numCnt = number[j];
      // 해당 상품이 할인 상품 목록에 충분한 개수로 포함
      if (eachItemCnt === numCnt) {
        numberOfItemType++;
      } else {
        break;
      }
    }
    // want의 상품 종류
    if (numberOfItemType === want.length) {
      days++;
    }
  }
  return days;
}

/*
1. 알고리즘 or 자료구조 선택 이유
map으로도 풀 수 있을 것 같은데 그냥 반복문과 배열 고차 함수를 이용해서 풀었습니다.

2. 시간 복잡도 or 결과
O(n*m)
n: discount.length
m: want.length

3. 기타 의견
풀 때는 변수명을 대충 썼는데, 주석 달면서 변수명을 알아보기 쉽게 고쳐봤는데,
이해가 잘 됐는지 모르겠네요

4. 참고 링크

*/
