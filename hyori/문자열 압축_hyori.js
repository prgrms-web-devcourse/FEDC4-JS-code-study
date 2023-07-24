function solution(s) {
  let result = s.length

  for (let range = 1; range <= s.length / 2; range++) {
    let cntLen = s.length
    let cntNum = 0
    let lastStr = ''

    for (let idx = 0; idx + range <= s.length; idx += range) {
      const str = s.substring(idx, idx + range)

      cntNum++
      if (lastStr !== str) {
        if (cntNum > 1) {
          cntLen -= cntNum * range - (cntNum.toString().length + range)
        }

        lastStr = str
        cntNum = 0
      }
    }
    if (cntNum > 0) {
      cntNum++
      cntLen -= cntNum * range - (cntNum.toString().length + range)
    }

    result = Math.min(result, cntLen)
  }

  return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
문자열 압축

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.16ms, 33.3MB)
테스트 2 〉	통과 (0.26ms, 33.1MB)
테스트 3 〉	통과 (0.21ms, 32.2MB)
테스트 4 〉	통과 (0.16ms, 32.2MB)
테스트 5 〉	통과 (0.07ms, 33.3MB)
테스트 6 〉	통과 (0.16ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.3MB)
테스트 8 〉	통과 (0.30ms, 33.5MB)
테스트 9 〉	통과 (0.31ms, 33.4MB)
테스트 10 〉	통과 (0.79ms, 33.6MB)
테스트 11 〉	통과 (0.20ms, 33.4MB)
테스트 12 〉	통과 (0.17ms, 33.5MB)
테스트 13 〉	통과 (0.24ms, 33.3MB)
테스트 14 〉	통과 (0.31ms, 33.4MB)
테스트 15 〉	통과 (0.18ms, 33.4MB)
테스트 16 〉	통과 (0.08ms, 33.3MB)
테스트 17 〉	통과 (0.42ms, 33.5MB)
테스트 18 〉	통과 (0.42ms, 33.4MB)
테스트 19 〉	통과 (0.43ms, 33.5MB)
테스트 20 〉	통과 (0.76ms, 33.5MB)
테스트 21 〉	통과 (0.75ms, 33.6MB)
테스트 22 〉	통과 (0.76ms, 33.6MB)
테스트 23 〉	통과 (0.79ms, 33.6MB)
테스트 24 〉	통과 (0.78ms, 33.6MB)
테스트 25 〉	통과 (0.77ms, 33.5MB)
테스트 26 〉	통과 (0.77ms, 33.5MB)
테스트 27 〉	통과 (0.75ms, 33.6MB)
테스트 28 〉	통과 (0.15ms, 33.5MB)

3. 기타 의견
처음에 reduce를 이용해서 풀까 하다가, 
시간복잡도가 커질 것 같아서 그냥 for문으로 풀었는데
모범 답안 보니까 함수형 프로그래밍이 찐으로 멋있네요 .. 

4. 참고 링크
*/
