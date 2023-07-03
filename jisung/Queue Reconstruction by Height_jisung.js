// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

// people[i][0] = "내 키(person of height hi)"
// people[i][1] = "나보다 같거나 큰 사람의 수(other people in front who have a height greater than or equal to hi.)"

// 해석
// 1. 키가 5인 사람이 섰고, 앞에는 자신보다 큰 사람이 없다.
// 2. 키가 7인 사람이 섰고, 앞에는 5가 있긴해도 자신보다 작기 때문에 앞에 자신보다 큰 사람은 0명이다.
// 3. 5가 나왔고, 자신보다 같거나 큰 사람의 수는 2명이 맞다.
// 4. 6이 나왔고, 자신보다 같거나 큰 사람은 7로 1명밖에 없다.
// 마찬가지..

// 이건 최대힙을 사용해서 다시 한 번 풀어보려고 합니다.
// 매 번 가장 큰 사람을 구해야하기 때문에, 그냥 최대힙과 그리디를 합하는 문제였던 것 같습니다.
const reconstructQueue = (people) => {
  const answer = []; // 정답 배열

  // 1. 키 큰 사람
  people.sort((a, b) => {
    return a[1] - b[1] || a[0] - b[0];
  });

  // 이쪽 코드가 이해가 안 가서 정답을 보고 풀었습니다.
  people.forEach((eachPeople) => {
    let count = 0;
    let i = 0;
    for (; i < answer.length; i++) {
      if (answer[i][0] >= eachPeople[0]) count += 1;
      if (count > eachPeople[1]) break;
    }

    answer.splice(i, 0, eachPeople);
  });

  return answer;
};
/*
1. 알고리즘 or 자료구조 선택 이유
- 정렬 후 자신의 위치에 맞게끔 다시 설정을 해줄 때 최대한 뒤에 배치시키는 것이 매 단계에서 반복돼서 이 부분이 그리디였던것 같습니다.

2. 시간 복잡도 or 결과
Accepted
Next question
1. Two Sum
More challenges
315. Count of Smaller Numbers After Self
2512. Reward Top K Students


3. 기타 의견
- 문제는 이해했으나 코드 구현력의 부족함을 실감했던 문제였습니다..
- 해도해도 문법 공부는 끝이없네요...ㅎ
4. 참고 링크
- https://handhand.tistory.com/76

5. 문제 이해
 - 가장 위에 적어놓았습니다! 
*/
