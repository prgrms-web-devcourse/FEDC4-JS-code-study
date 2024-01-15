const isQualified = (targetObj) => {
  for (let key of Object.keys(targetObj)) {
    if (targetObj[key] != 0) return false;
  }
  return true;
};

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const n = words[0].length;
  let left = 0;
  const answers = [];
  let targets = {};
  words.forEach((v) => {
    targets[v] ? (targets[v] += 1) : (targets[v] = 1);
  });

  while (left <= s.length - words.length * n) {
    const test = s.slice(left, left + words.length * n);
    for (let i = 0; i < test.length; i += n) {
      if (targets[test.slice(i, i + n)] !== undefined)
        targets[test.slice(i, i + n)] -= 1;
    }
    if (isQualified(targets)) answers.push(left);
    targets = {};
    words.forEach((v) => {
      targets[v] ? (targets[v] += 1) : (targets[v] = 1);
    });

    left += 1;
  }

  return answers;
};

/*
1. 알고리즘 or 자료구조 선택 이유
슬라이딩 윈도우, 해시

2. 시간 복잡도 or 결과

Runtime
2197
ms
Beats
10.91%
of users with JavaScript
Memory
53.01
MB
Beats
40.85%
of users with JavaScript

3. 기타 의견 
문제 자체를 잘못 이해했다. 영어 실력 부족이 문제인듯...

엄격한 조건으로 하려다가 조건이 생각과 달라서 무식한 코드 돌리니까 그냥 통과함... 최적화는 추가로 할 수 있을듯

4. 참고 링크

*/
