/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */

// 다른 답 참고222
const maxConsecutiveAnswers = function (answerKey, k) {
  let max = 0
  let left = 0
  let freq = { T: 0, F: 0 }

  for (let right = 0; right < answerKey.length; right++) {
    freq[answerKey[right]]++

    while (Math.min(freq['T'], freq['F']) > k) {
      freq[answerKey[left]]--
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

/*
1. 알고리즘 or 자료구조 선택 이유
이분탐색

2. 시간 복잡도 or 결과
runtime: 106 ms / beats 43.22%
memory: 45.25 mb / beats 57.09%

3. 기타 의견
이 문제는 앞 문제보다 더 접근이 어려웠습니다.
'T'와 'F'의 개수가 k보다 클 때 left 값을 1씩 올리는 부분이 이해가 되지 않습니다.
혹시 이해 되신 분은 설명 부탁드립니다 ..

4. 참고 링크
*/
