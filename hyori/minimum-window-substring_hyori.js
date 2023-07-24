/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  let start = 0, end = s.length
  const strCntMap = {}
  const strIdxMap = {}

  for (const c of t) {
      if (strCntMap[`${c}`]) {
          strCntMap[`${c}`]++
          continue
      }
      strCntMap[`${c}`] = 1
      strIdxMap[`${c}`] = []
  }

  const strCntSavedMap = {...strCntMap}
  const currIdxArr = []

  for (let i = 0; i < s.length; i++) {
      // 만약 strCntMap 개수만큼 다 안빠졌으면 일단 빼고, currIdxArr를 채우자.
      // currIdxArr 길이가 t 길이와 같아졌다면? 이제 start와 end 값을 넣을 수 있다.
      // 만약, 현재 문자 맵에 개수가 넘친다면? 만약 length가 .......... 포기 

      const cnt = strCntMap[`${s[i]}`]
      if (cnt !== undefined) {
          strCntMap[`${s[i]}`]--
          strIdxMap[`${s[i]}`].push(i)

          if (cnt > 0) {
            currIdxArr.push(i)
          }
      }

      if (currIdxArr.length === t.length) {
          while(조건문) {
              currIdxArr[]
          }

          start = currIdxArr[0]
          end = currIdxArr.at(-1)
      }
  }
  console.log(strIdxMap, start, end)
}

/*
1. 알고리즘 or 자료구조 선택 이유
해시

2. 시간 복잡도 or 결과
😥못 품

3. 기타 의견
뭔가 감을 잡았다 싶었는데 역시 hard 문제라 그런지 조건이 더 까다롭네요 ...
3일에 나눠서 풀어봤는데 깔끔하게 포기했습니다 ㅎㅎ

원래 풀려던 방식은,
idx 값을 map에 저장해놓고 end - start가 가장 작은 값을 계속 저장해주고
마지막에 slice 함수로 멋있게 return 하는 게 목표였습니다.

idx 접근 방식은 비슷했던 거 같은데 너무 어렵습니다 ㅠㅠ
답 참고해도 어렵네요 ..

4. 참고 링크
*/