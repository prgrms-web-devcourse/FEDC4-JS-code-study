/**
 * @param {number} n
 * @return {number}
 */
const checkRecord = function (n) {
  let a = 1,
    b = 1,
    d = 1,
    c = 0,
    e = 0,
    f = 0
  const M = 1000000007
  for (let i = 1; i < n; i++) {
    let temp1 = (a + b + c) % M
    let temp2 = (temp1 + d + e + f) % M
    c = b
    b = a
    f = e
    e = d
    a = temp1
    d = temp2
  }

  return (a + b + c + d + e + f) % M
}

/*
이전 풀이
var checkRecord = function (n) {
	let a = 1,
		b = 1,
		d = 1,
		c = 0,
		e = 0,
		f = 0
	const M = 1000000007
	for (let i = 1; i < n; i++) {
		let temp1 = (a + b + c) % M
		let temp2 = (temp1 + d + e + f) % M
		c = b
		b = a
		f = e
		e = d
		a = temp1
		d = temp2
	}

	return (a + b + c + d + e + f) % M
}


1. 알고리즘 or 자료구조 선택 이유
DP

2. 시간 복잡도 or 결과

3. 기타 의견
죄송합니다 ....
문제를 다시 풀기에 기억이 나질 않았습니다.
다시 설명 듣겠습니다.

4. 참고 링크
*/
