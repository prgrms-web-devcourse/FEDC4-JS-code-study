function solution(n, computers) {
    
    const visited = Array(n).fill(false) // 방문 체크
    let count = 0;
    
    const network = (i) => {
        visited[i] = true
        for(let j=0; j < n; j++){
            if(computers[i][j] === 1 && !visited[j]){ // 이 부분에서 n번 반복했을 때까지 재귀되지 않는다면 다른 네트워크를 의미
                network(j)
            }
        }
    }

    for(let i=0; i < n; i++){
        if(!visited[i]){
            count++; // 여기서의 network 호출 횟수가 네트워크의 갯수이다.
            network(i)
        }     
    }
    
    return count;
}


/*
1. 알고리즘 or 자료구조 선택 이유
bfs를 생각하고 풀다가 조건을 거친 뒤 큐에 푸쉬를 해주는 부분에서 푸쉬해 줄 만한 값을 찾지 못해 dfs로 구현했습니다.

2. 시간 복잡도 or 결과
시간 복잡도: O(n^2)이라고 생각합니다!
다른 의견이 있으시면 리뷰를 통해 알려준다면 감사하겠습니다!

3. 기타 의견
최소, 최단 거리를 찾는다는 등 키워드가 주워지지 않으면 bfs를 써야할지 dfs를 써야할지 올바른 자료구조를 선택하지 못하는 것 같습니다..
네트워크 문제 질문하기에 올라온 질문들로 힌트를 얻었습니다..ㅎ
*/
