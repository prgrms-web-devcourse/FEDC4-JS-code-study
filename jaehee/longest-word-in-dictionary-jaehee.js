/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let maxVal = "";
  const obj = {};
  words = words.sort();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordBefore = word.slice(0, -1); // 이전 단어가 있는지 확인용

    if (word.length === 1) {
      // 한 글자인 경우 그냥 추가해줌
      obj[word] = true;
    } else {
      // 한 글자가 아닌 경우 이전 단어가 있는지 확인
      if (obj[wordBefore]) {
        obj[word] = true; // 지금 단어도 추가
      } else {
        continue;
      }
    }

    if (maxVal.length < word.length) maxVal = word; // 최대 길이 갱신
  }

  return maxVal;
};

/*
1. 알고리즘 or 자료구조 선택 이유
객체에 key가 있는지 여부를 활용했습니다.

2. 시간 복잡도 or 결과
Runtime
84 ms
Beats
86.57%
Memory
47.4 MB
Beats
83.58%

3. 기타 의견 

4. 참고 링크

*/
