## 그리디(Greedy) 알고리즘

![image](https://images.velog.io/images/falling_star3/post/f7a2947a-c953-40e2-a24e-20a50f5b3f49/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png)

`그리디 알고리즘(Greedy algorithm)`은 최적해를 구하는 데 사용되는 알고리즘 중 하나로, 이 알고리즘은 선택할 때마다 그 순간에 가장 최적인 선택을 하는 기법이다.

이 알고리즘은 탐욕적인 방법을 사용하므로, 항상 최적해를 보장하지는 않는다. 하지만 그리디 알고리즘이 항상 최적해를 보장하지 않더라도, 시간 복잡도가 낮아 매우 빠르게 동작하는 장점이 있다.

그리디 알고리즘을 적용할 때는 일반적으로 다음과 같은 과정을 따른다.

1. 문제에서 주어진 조건과 제약 조건을 분석한다.
2. 각 선택지에 대해 최적해를 찾아 선택한다.
3. 선택한 최적해를 부분해로 추가한다.
4. 부분해를 사용하여 남은 선택지를 새로운 문제로 만든다.
5. 문제가 해결될 때까지 이 과정을 반복한다.

그리디 알고리즘은 여러 가지 문제에 적용될 수 있다. 예를 들어, 거스름돈을 계산하는 문제에서는 가장 큰 금액부터 선택하여 최적해를 구할 수 있다. 또한, 회의실 배정 문제에서는 가장 빨리 끝나는 회의를 먼저 선택하여 최적해를 구할 수 있다.

<br>

### 그리디 알고리즘을 사용한 회의실 배정 문제 해결

```
const meetings = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 3, end: 8 },
  { start: 5, end: 9 },
  { start: 6, end: 10 },
  { start: 8, end: 11 },
  { start: 8, end: 12 },
  { start: 2, end: 13 },
  { start: 12, end: 14 },
];

// 끝나는 시간을 기준으로 오름차순으로 정렬
meetings.sort((a, b) => a.end - b.end);

const selectedMeetings = []; // 선택된 회의 리스트

// 가장 빨리 끝나는 회의를 먼저 선택
let currentMeeting = meetings[0];
selectedMeetings.push(currentMeeting);

for (let i = 1; i < meetings.length; i++) {
  const nextMeeting = meetings[i];
  // 현재 회의가 끝나는 시간보다 다음 회의의 시작 시간이 같거나 더 늦다면 선택
  if (currentMeeting.end <= nextMeeting.start) {
    currentMeeting = nextMeeting;
    selectedMeetings.push(currentMeeting);
  }
}

console.log(selectedMeetings);
// 출력: [{start: 1, end: 4}, {start: 5, end: 7}, {start: 8, end: 11}, {start: 12, end: 14}]

```

<br>

### 예시 문제

프로그래머스 ['구명보트'](https://school.programmers.co.kr/learn/courses/30/lessons/42885) 문제

무인도에 갇힌 사람들을 2인용 구명보트로 구하려 한다. 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 구한다.

```
// 보트를 출발 할때 매번 가장 많은 인원이 탑승 할 수 있도록 조건을 짜야한다.
// 1. people을 몸무게순으로 정렬한다.
// 2. 몸무게가 가장 많은 사람을 보트에 태운다.(pop)
// 3. 그 다음에는 몸무게가 가장 적은 사람을 보트에 태운다.(shift)
// 4. 이때 보트에 태울 수 없다면 동승할 수 있는 인원이 없는 것이므로 보트를 출발시킨다.
// 5. 2 - 4를 반복한다.

function solution(people, limit) {
    let result = 0;
    people.sort((a, b) => a - b);
    while(people.length) {
        if(people.length >= 2 && people[0] + people.at(-1) <= limit) {
            result++;
            people.shift();
            people.pop();
        }
        else {
            result++;
            people.pop();
        }
    }
    return result;
}
```