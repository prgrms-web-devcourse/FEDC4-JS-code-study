function solution(jobs) {
    
    let j = 0;
    let time = 0;
    let sum = 0;
    jobs.sort((a,b)=> a[0] - b[0]); // 요청이 들어온 순서대로 정렬
    
    const priorityQueue = [];
    
    while(j < jobs.length || priorityQueue.length !== 0){
        // 해당작업을 처리하는 동안 들어오는 요청을 우선순위 큐에 넣어준다.
        if(j < jobs.length && time >= jobs[j][0]){
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a,b)=> a[1] - b[1]) // 처리 시간이 빠른 순서대로 재정렬
            continue;
        }
        if(priorityQueue.length !== 0){
            time += priorityQueue[0][1];
            sum += time - priorityQueue[0][0];
            priorityQueue.shift();
        }else{
            time = jobs[j][0]; // 우선순위 큐가 비었으나 작업이 남아있을 경우 남은 jobs 첫번째 배열부터 다시 시작
        }
    }
    
    return ~~(sum / jobs.length);
}

// [ [ 0, 3 ] ]
// 3 3
// [ [ 1, 9 ] ]
// [ [ 2, 6 ], [ 1, 9 ] ]
// 9 10
// 18 27

/*
1. 알고리즘 or 자료구조 선택 이유
디스크가 작업을 수행하고 있지 않을 때는 먼저 요청이 들어온 작업부터 처리해야하지만 요청 순서대로 처리한다면 최소시간을 보장하지 못합니다.
작업을 진행하는 중간 단계에서 작업의 우선순위를(처리 시간별로) 기반으로 정렬이 필요하다 생각하여 우선순위 큐로 풀어보았습니다.

2. 코드 설명
1. while문 조건을 두가지 모두 해당 되지 않는다면 작업할 것이 없다는 것이므로 멈추도록 만들었습니다.
2. 제일 먼저 time보다 같거나 작은 경우를 전부 우선순위 큐에 넣어준 다음 처리 시간 순서대로 재정렬 했습니다.
3. 해당 값을 우선순위 큐에 푸쉬한 다음 j++을 통해 j + 1 을 하여 다음 요소를 가르키도록 하였습니다.
4. continue를 사용해서 첫 작업이 진행되는 동안 작업 요청이 들어온다면 2번처럼 정렬될 수 있도록 루프를 끊어주었습니다.
5. 우선순위 큐가 비었는데 jobs 데이터가 남았다면 time을 jobs의 남은 첫번째 배열을 기준으로 재설정 해두었습니다.
ex) 이전 요소의 작업이 모두 끝난 뒤에 요청이 들어오는 경우

3. 시간 복잡도 or 결과
시간 복잡도: O(nlogn) sort()를 사용하여 정렬
혹시 아니라면 리뷰를 통해 알려주시면 감사합니다..!!

3. 기타 의견
처음에는 최소 처리시간을 기준으로 정렬만 한 후 해봤지만 오류가 계속되어 구글링을 통해 이해한 후 다시 한번 구현해보았습니다.
자료구조나 알고리즘 능력이 많이 부족한 것 같습니다..

4. 참고 링크
https://kyun2da.github.io/2020/07/21/diskController/
https://zzemal.tistory.com/102
*/