"use strict";

// 문제 이해
// - 그냥 아예 안 입는 거 빼고는 모든 조합이 다 가능!
// - 같은 종류의 옷은 반드시 1벌만 입어야 한다.

let clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
let solution = (clothes) => {
  let clothesMap = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (!clothesMap.has(clothes[i][1]))
      clothesMap.set(clothes[i][1], [clothes[i][0]]);
    else
      clothesMap.set(clothes[i][1], [
        ...clothesMap.get(clothes[i][1]),
        clothes[i][0],
      ]);
  }

  let allLength = [];
  clothesMap.forEach((value, key) => allLength.push(value.length + 1));
  return allLength.reduce((acc, cur) => acc * cur) - 1;
};

console.log(solution(clothes));

/*
1. 알고리즘 or 자료구조 선택
- 각 배열 당 모든 값들이 각각의 특징이 필요하다고 생각했다. 
- 예를들면, [1,2,3,4]가 각각 사람의 특징이라고 했을 때, 
- 각 사람은 index 0번사람 ~ 3번 사람 => 각각의 특징을 1 2 3 4로 해주면 된다. 


2. 코드 설명
- 옷을 선택해야하는 조합 문제입니다 
- 순열이 아닌 이유는 a옷을 먼저 선택하고 c를 고른것과 a를 나중에 선택하고 c를 고르나 결국 ac를 선택한건 같기 때문입니다. 
- 🔴 중요 => 안 입는 경우도 생각을 해줘야 합니다 🔴
- 🔴 하지만 적어도 1개는 입어야 하기 때문에, 아예 안 입는 경우의 수를 전체 조합에서 빼주면 됩니다. 🔴

3. 시간 복잡도: O(n)
for, forOf 각각 1개씩 (중첩이 아니기떄문에, O(N)이 맞습니다.)
- 단 해시는 메모리를 많이 사용하기 때문에, 메모리를 많이 사용하였습니다.

4. 참고 사이트
- 참고하지는 않았습니다!
 */
