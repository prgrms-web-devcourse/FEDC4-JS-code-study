function solution(a) {
  let answer = a.length;
  const recordFromLeft = Array.from({ length: a.length }, () => Infinity);
  const recordFromRight = Array.from({ length: a.length }, () => Infinity);
  let leftMin = Infinity;
  let rightMin = Infinity;

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] < leftMin) {
      leftMin = a[i - 1];
    }
    if (a[a.length - i] < rightMin) {
      rightMin = a[a.length - i];
    }

    recordFromLeft[i] = leftMin;
    recordFromRight[a.length - 1 - i] = rightMin;
  }

  //내 왼쪽에서 가장 작은 값이 나보다 작음 + 내 오른쪽에서 가장 작은 값이 나보다 작음 -> 실패

  for (let i = 1; i < a.length - 1; i++) {
    const now = a[i];
    if (recordFromLeft[i] < now && recordFromRight[i] < now) {
      answer--;
    }
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유



2. 시간 복잡도 or 결과
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.10ms, 33.5MB)
테스트 3 〉	통과 (0.49ms, 33.6MB)
테스트 4 〉	통과 (34.48ms, 42.5MB)
테스트 5 〉	통과 (92.16ms, 62.3MB)
테스트 6 〉	통과 (154.76ms, 74.9MB)
테스트 7 〉	통과 (179.61ms, 89.4MB)
테스트 8 〉	통과 (179.01ms, 90.9MB)
테스트 9 〉	통과 (196.95ms, 90.7MB)
테스트 10 〉	통과 (240.07ms, 90.8MB)
테스트 11 〉	통과 (239.01ms, 90.7MB)
테스트 12 〉	통과 (196.88ms, 90.7MB)
테스트 13 〉	통과 (207.76ms, 90.9MB)
테스트 14 〉	통과 (166.32ms, 90.6MB)
테스트 15 〉	통과 (180.71ms, 90.7MB)

3. 기타 의견 
아이디어 찾는게 중요했음

4. 참고 링크

*/
