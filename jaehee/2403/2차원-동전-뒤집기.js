const isSame = (board, target) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== target[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const flipHorizontal = (board, idx) => {
  for (let i = 0; i < board.length; i++) {
    board[i][idx] = board[i][idx] === 0 ? 1 : 0;
  }
};

const flipVertical = (board, idx) => {
  for (let i = 0; i < board[0].length; i++) {
    board[idx][i] = board[idx][i] === 0 ? 1 : 0;
  }
};

function solution(beginning, target) {
  let answer = Infinity;
  const endTime = target.length + target[0].length;

  const tries = (board, time, record) => {
    if (isSame(board, target)) {
      answer = Math.min(answer, record);
      return;
    }
    if (time >= endTime) {
      return;
    }

    const temp = Array.from({ length: board.length }, (_, i) =>
      Array.from({ length: board[0].length }, (_, j) => board[i][j])
    );

    if (time < target.length) {
      tries(board, time + 1, record);
      board = temp;
      flipVertical(board, time % target.length);
      tries(board, time + 1, record + 1);
    } else {
      tries(board, time + 1, record);
      board = temp;
      flipHorizontal(board, time % target[0].length);
      tries(board, time + 1, record + 1);
    }
  };

  tries(beginning, 0, 0);

  return answer === Infinity ? -1 : answer;
}
/*
1. 알고리즘 or 자료구조 선택 이유
완탐?

2. 시간 복잡도 or 결과
테스트 1 〉	통과 (9751.78ms, 53.9MB)
테스트 2 〉	통과 (44.11ms, 37.4MB)
테스트 3 〉	통과 (1045.84ms, 40.9MB)
테스트 4 〉	통과 (475.82ms, 39.5MB)
테스트 5 〉	통과 (2316.40ms, 45MB)
테스트 6 〉	통과 (156.27ms, 37.8MB)
테스트 7 〉	통과 (401.43ms, 40.5MB)
테스트 8 〉	통과 (40.25ms, 38.4MB)
테스트 9 〉	통과 (20.69ms, 37.5MB)
테스트 10 〉	통과 (86.55ms, 37.9MB)
테스트 11 〉	통과 (9368.97ms, 53.9MB)
테스트 12 〉	통과 (9504.17ms, 53.6MB)
테스트 13 〉	통과 (9958.78ms, 53.7MB)
테스트 14 〉	통과 (9971.87ms, 53.6MB)
테스트 15 〉	통과 (0.11ms, 33.5MB)
테스트 16 〉	통과 (0.21ms, 33.5MB)
테스트 17 〉	통과 (0.35ms, 33.6MB)
테스트 18 〉	통과 (217.72ms, 40.5MB)
테스트 19 〉	통과 (0.94ms, 33.5MB)
테스트 20 〉	통과 (0.59ms, 33.7MB)
테스트 21 〉	통과 (0.49ms, 33.5MB)

3. 기타 의견 
더 좋은 방법이 있을 것 같다. 간신히 통과함

4. 참고 링크

*/
