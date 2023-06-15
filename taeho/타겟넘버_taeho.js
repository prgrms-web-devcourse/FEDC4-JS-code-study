function solution(numbers, target) {
    let count = 0;
    function DFS(depth,sum){
        console.log(depth,sum,count);
        if(depth < numbers.length){
            DFS(depth+1, sum + numbers[depth]);
            DFS(depth+1, sum - numbers[depth]);
        }else{
            console.log('else문 실행되는 시점');
            if(sum === target){
                count++;
            }
        }
    }
    DFS(0,0);
    return count;
}

// 1. 알고리즘 or 자료구조 선택 이유
// DFS를 통해 깊이만큼 +,- 를 진행해주면 좋겠다 생각했습니다.

// 2. 코드 설명
// DFS로 +,- 깊이만큼 탐색하며 target과 sum값이 같으면 count를 올려주었습니다.
// 깊이만큼 내려간 다음에 다시 재귀하며 깊이가 채워질 때까지 +,- 작업을 반복합니다.

//시간 복잡도
// 테스트 1 〉	통과 (21.76ms, 35.5MB)
// 테스트 2 〉	통과 (15.23ms, 35.7MB)
// 테스트 3 〉	통과 (0.31ms, 33.5MB)
// 테스트 4 〉	통과 (0.41ms, 33.5MB)
// 테스트 5 〉	통과 (1.80ms, 35.7MB)
// 테스트 6 〉	통과 (0.28ms, 33.5MB)
// 테스트 7 〉	통과 (0.21ms, 33.5MB)
// 테스트 8 〉	통과 (1.05ms, 35.7MB)