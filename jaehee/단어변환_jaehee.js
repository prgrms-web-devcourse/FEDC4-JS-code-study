function solution(begin, target, words) {
  const maps = {}; // 단어마다 한 글자만 다른 단어를 저장할 객체
  const points = {}; // 단어마다 최단 거리를 저장할 객체
  const q = [begin];
  const allWords = [begin, ...words, target];

  // 한 글자만 다른 단어를 찾아서 맵에 저장
  const getSimilarWord = (target, word) => {
    if (!words.includes(word)) return;
    let count = 0;
    for (let i = 0; i < begin.length; i++) {
      if (target[i] !== word[i]) {
        count++;
      }
    }
    if (count === 1) {
      maps[target].push(word);
    }
  };

  // 모든 단어에 대해 한 글자만 다른 단어를 찾아서 맵에 저장
  allWords.forEach((now) => {
    maps[now] = [];
    points[now] = Infinity;
    allWords.forEach((temp) => getSimilarWord(now, temp));
  });
  points[begin] = 0; // 시작점은 0으로 초기화

  while (q.length) {
    const now = q.shift();
    maps[now].forEach((word) => {
      if (points[word] > points[now] + 1) {
        points[word] = points[now] + 1; // 최단 거리 갱신
        q.push(word); // 최단 거리가 갱신된 경우에만 큐에 추가
      }
    });
  }

  const answer = points[target];

  return answer === Infinity ? 0 : answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
- 단어의 길이와 단어의 개수가 크지 않기 때문에 일일이 비교해도 시간 초과가 발생하지 않을 것이라고 판단했습니다.
- 일단 현재 단어 기준 이동할 수 있는 단어를 모두 찾아서 맵에 저장하고, 그 다음에 최단 거리를 구하는 방식으로 구현했습니다.

2. 시간 복잡도 or 결과
- 시간 복잡도: O(N^2 * M) (N: 단어의 개수, M: 단어의 길이)

테스트 1 〉	통과 (0.26ms, 33.4MB)
테스트 2 〉	통과 (0.65ms, 33.4MB)
테스트 3 〉	통과 (2.14ms, 36.9MB)
테스트 4 〉	통과 (0.27ms, 33.4MB)
테스트 5 〉	통과 (0.23ms, 33.6MB)

3. 기타 의견 

4. 참고 링크

*/
