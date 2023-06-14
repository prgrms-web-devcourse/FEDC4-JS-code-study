function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  function getAnswer(time, value) {
    if (time === n) {
      if (value === target) answer += 1;
      return;
    }
    time++;
    getAnswer(time, value + numbers[time - 1]);
    getAnswer(time, value - numbers[time - 1]);
  }
  getAnswer(0, 0);
  return answer;
}

// 10m

/*
테스트 1 〉	통과 (14.38ms, 35.4MB)
테스트 2 〉	통과 (13.64ms, 35.5MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.38ms, 33.6MB)
테스트 5 〉	통과 (2.15ms, 35.6MB)
테스트 6 〉	통과 (0.27ms, 33.4MB)
테스트 7 〉	통과 (0.19ms, 33.4MB)
테스트 8 〉	통과 (1.03ms, 35.5MB)
*/
