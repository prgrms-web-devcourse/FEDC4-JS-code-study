const isPalindrom = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let answer = s[0];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (j - i < answer.length) continue;
      const now = s.substring(i, j);
      if (isPalindrom(now)) answer = now;
    }
  }

  return answer;
};

/*
1. 알고리즘 or 자료구조 선택 이유
몇가지 최적화 후 정직하게 처리... 

2. 시간 복잡도 or 결과
Runtime
417
ms
Beats
21.95%
of users with JavaScript
Memory
56.13
MB
Beats
24.47%
of users with JavaScript

3. 기타 의견 
이렇게 풀면 안된다. 엄격한 환경에서 시간 초과가 날 것이다.


4. 참고 링크
manacher 알고리즘
https://www.crocus.co.kr/1075

*/
