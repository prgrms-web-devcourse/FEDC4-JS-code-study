/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
	return ((n + 4) * (n + 3) * (n + 2) * (n + 1)) / 24
}

/*
1. 알고리즘 or 자료구조 선택 이유
중복조합 공식 , ,
n+4C4 를 구현했습니다

2. 시간 복잡도 or 결과
runtime: 49 ms / beats 91.89%
memory: 41.1 mb / beats 99.10%

3. 기타 의견
DP로 풀고 싶었지만 공식이 생각나버렸습니다 ..

4. 참고 링크
*/
