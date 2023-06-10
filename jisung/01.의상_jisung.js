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
