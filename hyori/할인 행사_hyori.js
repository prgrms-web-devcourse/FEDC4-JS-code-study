function solution(want, number, discount) {
	let result = 0
	const idxMap = new Map(want.map((v, i) => [v, i]))

	for (let i = 0; i <= discount.length - 10; i++) {
		const count = [...number]
		for (let j = i; j < i + 10; j++) {
			if (!idxMap.has(discount[j])) break
			count[idxMap.get(discount[j])]--
		}
		result += count.every((i) => !i) ? 1 : 0
	}
	return result
}

/*
1. 알고리즘 or 자료구조 선택 이유
구현

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (5.20ms, 37.9MB)
테스트 2 〉	통과 (13.73ms, 41.2MB)
테스트 3 〉	통과 (5.77ms, 38.3MB)
테스트 4 〉	통과 (11.74ms, 39.6MB)
테스트 5 〉	통과 (9.31ms, 40MB)
테스트 6 〉	통과 (4.65ms, 37.4MB)
테스트 7 〉	통과 (6.79ms, 38.4MB)
테스트 8 〉	통과 (15.32ms, 43.1MB)
테스트 9 〉	통과 (6.05ms, 38.3MB)
테스트 10 〉	통과 (10.90ms, 40.5MB)
테스트 11 〉	통과 (7.03ms, 37.7MB)
테스트 12 〉	통과 (0.09ms, 33.6MB)

3. 기타 의견
이 문제 알고보니 제가 예전에 풀었더라고요 ?
그래서 real 미러전 떴습니다.
제가 저를 이겼습니다 ..ㅠㅠ

예전 코드 :
function solution(want, number, discount) {
  let answer = 0
  
  const isMatch = discount => {
    const wantMap = new Map()
    discount.forEach(d => wantMap.set(d, (wantMap.get(d) || 0) + 1))
    for (let i = 0; i < want.length; i++) {
      if (wantMap.get(want[i]) !== number[i]) return false
    }
      
    return true;
  }
  
  for (let idx = 0; idx <= discount.length - 10; idx++) {
    const d = discount.slice(idx, idx + 10);
    if (isMatch(d)) answer++
  }
  return answer
}

4. 참고 링크
*/
