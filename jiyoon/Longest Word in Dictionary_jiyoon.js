//2023.07.16 15:20~16:40
/**
 * @param {string[]} words
 * @return {string}
 */
function longestWord(words) {
  // 사전순 정렬
  words.sort();
  let longestWord = '';
  // 각 단어를 순회하면서 접두사 조건 검사
  for (const word of words) {
    let isValid = true;
    let prefix = '';

    // 단어의 각 글자 순회
    for (const char of word) {
      prefix += char;

      // 해당 접두사가 배열에 존재하지 않는 경우
      if (!words.includes(prefix)) {
        isValid = false;
        break;
      }
    }

    // isValid가 true이고, 현재 단어가 더 긴 경우 longestWord 변경
    if (isValid && word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
/*
1. 알고리즘 or 자료구조 선택 이유
구현

2. 시간 복잡도 or 결과
O(nlogn)
Runtime - 477ms 8.96%
Memory - 48.1MB 82.9%

3. 기타 의견
map으로 풀다가 케이스가 자꾸 실패하는 경우가 생겨서..
시간 너무 많이 써서, 그냥 구현으로 풀었습니다 ㅜ
참고자료를 보니 set으로 푸니까 간단하더군요..

4. 참고 링크
var longestWord = function(words) {
  words.sort();
  let set = new Set();
  let res = '';

  for (let word of words) {
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) {
        res = word;
      }
    }
  }
  return res;

  map으로 별짓 다 한 풀이..
  const longestWord = function(words) {
  words.sort();
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
      if(map.has(words[i][0])){
          const values = map.get(words[i][0]);
          const prevValue = values.at(-1);
            if (words[i].startsWith(prevValue)) {
                values.push(words[i]);
            }
      }else{
          map.set(words[i][0], [words[i]]);
      }
  }
  console.log(map);
  const temp = [];
  let maxLength = 0;
  for(const value of map.values()){
      if(value.length >= 2){
         temp.push(value.at(-1));
      }
  }
  console.log(temp);
  return temp[0];
}
*/
