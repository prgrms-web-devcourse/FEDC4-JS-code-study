// 2023.06.10 14:10 ~ 15:17

function solution(clothes) {
  const map = new Map();
  let total = 1;

  for (let i = 0; i < clothes.length; i++) {
    const kind = clothes[i][1];
    if (map.has(kind)) {
      const isKind = map.get(kind);
      map.set(kind, isKind + 1);
    } else {
      map.set(kind, 1);
    }
  }

  for (const kindCnt of map.values()) {
    total *= kindCnt + 1;
  }

  return total - 1;
}

/*
1. 알고리즘 or 자료구조 선택
clothes가 [의상의 이름, 의상의 종류]로 구성되어 있고 같은 이름을 가진 의상은 존재하지 않는 것을 보고 해시를 이용해서 풀면 되겠다고 생각했습니다.
다만 해시도 구현 방법이 다양해서 적절한 구현 방법을 찾아야 한다고 생각했습니다.

배열 - 보편적으로 잘 사용하지 않는데, 동적인 키 크기에 대응할 수 없음,
키-값 관계의 저장에 있어서 인덱스로 접근해야 함, 메서드 지원이 부족함.
Set 객체 - 키와 값이 동일하게 저장될 때 사용, 중복 값 삭제 시에 유용
따라서 Object 또는 Map을 사용

결론은 Map을 사용했습니다.

2. 코드 설명
서로 다른 종류의 옷의 조합을 구해야 하므로 의상의 종류를 키값으로 받았습니다.
clothes의 길이만큼 순회하면서
map에 의상의 종류가 없다면, 의상의 종류를 추가해 주고 개수를 1개 추가해 주었습니다.
map에 의상의 종류가 있다면, 의상의 종류를 키값으로 받아와서 그 키에 해당하는 값인 개수를 1개 증가시켜 주었습니다.

여기까지 완성하고 조합으로 접근해야 하는 감이 살짝 왔었는데,
쉽게 패턴이 안 보여서 애를 먹었습니다..
시간이 너무 흘러서 질문하기 탭에서 도움을 받아 문제를 해결했습니다.

3. 시간 복잡도: O(n)
for문 2개

4. 참고 사이트
Object vs Map : https://kotlinworld.com/415
for loop 속도 차이: https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-for-loop-%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90
조합: https://school.programmers.co.kr/questions/31757
 */
