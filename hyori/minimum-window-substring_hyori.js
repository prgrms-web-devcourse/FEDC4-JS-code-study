/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length < t.length) return ''

  const tMap = {}

  for (let char of t) {
    tMap[char] = (tMap[char] || 0) + 1
  }

  let left = 0,
    right = 0,
    answer = ''

  let tLen = Object.keys(tMap).length

  while (right < s.length) {
    const rightChar = s[right]
    tMap[rightChar]--

    if (tMap[rightChar] === 0) tLen--

    while (tLen === 0) {
      if (!answer || answer.length > right - left + 1) {
        answer = s.slice(left, right + 1)
      }

      const leftChar = s[left]

      if (tMap[leftChar] === 0) {
        tLen++
      }

      if (tMap[leftChar] !== undefined) {
        tMap[leftChar]++
      }

      left++
    }

    right++
  }

  return answer
}

/*
1. 알고리즘 or 자료구조 선택 이유
해시

2. 시간 복잡도 or 결과
74ms 97.79%

3. 기타 의견
왜 안 풀리지? 왜 기억 안 나지? 싶었는데,
알고보니 이 문제 답 풀이를 제대로 안 보고 버린 문제였네요 ..
덕분에 고통 받았습니다.
답을 또 열심히 참고했습니다.

이전 코드
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
*/
