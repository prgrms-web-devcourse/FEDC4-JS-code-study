/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
	if (s.length < t.length) return "";

	const wanted = {};

	for (const char of t) {
		wanted[char] = (wanted[char] || 0) + 1;
	}

	let left = 0;
	let right = 0;
	let wantedLength = Object.keys(wanted).length;
	let temp = "";

	while (right < s.length) {
		const rightChar = s[right];
		wanted[rightChar]--;
		if (wanted[rightChar] === 0) wantedLength--;

		while (wantedLength === 0) {
			if (!temp || temp.length > right - left + 1) {
				temp = s.slice(left, right + 1);
			}

			const leftChar = s[left];

			if (wanted[leftChar] === 0) {
				wantedLength++;
			}
			wanted[leftChar]++;
			left++;
		}
		right++;
	}

	return temp;
};

// 처음 푼 풀이

// var minWindow = function (s, t) {
//   if (s.length < t.length) return '';

//   let result = new Set();
//   let temp = '';
//   const answer = [];

//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];

//     if (temp === '' && !t.includes(curr)) {
//       continue;
//     }
//     temp += curr;

//     if (t.includes(curr)) {
//       result.add(curr);
//       if (result.size === t.length) {
//         answer.push(temp);
//         result = new Set();
//         temp = '';
//       }
//     }
//   }
//   let min = Infinity;

//   answer.forEach((item) => {
//     min = Math.min(item.length, min);
//   });

//   return answer.filter((item) => item.length === min).join('');
// };

/*
1. 알고리즘 or 자료구조 선택 이유
슬라이딩 윈도우처럼 원하는 t의 값을 모두 얻을 때까지 진행시켜 모두 얻은 시점에서 Set과 현재까지 얻은 문자열을 결과값 배열에 넣어준 뒤
초기화하고 마지막에 결과 배열에 들어있는 값 중 가장 작은 길이를 구하고자 했지만.. Set을 쓰다보니 s = 'AA' t = 'AA' 와 같은 값을 처리하지
못하는 것 같습니다.. 답을 보고 풀었는데 아직은 이해가 완전히 되지 않아서 최대한 이해 해보도록 하겠습니다..!

2. 시간 복잡도 or 결과 - splice를 사용한 부분이나 좀 효율적인 방법으로는 풀지 못한 것 같습니다...
Runtime 81 ms Beats 95.21%
Memory 45.3 MB Beats 79.63%
*/
