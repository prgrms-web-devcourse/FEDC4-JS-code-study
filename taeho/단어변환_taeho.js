class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    
    enqueue(value){
        this.queue[this.rear++] = value;
        this.size++;
    }
    
    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        this.size--;
        return value;
    }
    
    peek(){
        return this.queue[this.front];
    }
}

const isCheck = (word1, word2) => { // 한 번에 하나의 알파벳만 변경되는지 체크하는 함수
    if([...word1].filter((v,i)=> v !== word2[i]).length === 1){
        return true;
    }
    return false;
}

function solution(begin, target, words) {

    const queue = new Queue();
    
    if(!words.includes(target)) return 0; // 
    
    const visited = {}; //방문 체크 및 방문 시 레벨을 저장해 줄 객체
    queue.enqueue(begin);
    
    visited[begin] = 0;
    
    while(queue.size){
        const current = queue.dequeue();
        
        if(current === target) break;
        
        words.forEach((value) => {
            if(isCheck(current,value) && !visited[value]){ // 알파벳 하나의 변경과 방문하지 않음을 만족하면
                queue.enqueue(value);
                visited[value] = visited[current] + 1; // visited 객체에 깊이를 저장해준다. 
            }
        })
    }
    return visited[target]; //target이 되는 최소 단계(깊이)를 반환
}



// 1. 알고리즘 or 자료구조 선택 이유
// 문제 이해에 어려움이 있어 BFS와 DFS로 구현을 시도해봤지만 한 단어만 다른 단어들을 깊게 탐색해 모든 경우의 수 중 최소 레벨을 구하는
// DFS 보다 BFS가 훨씬 효율적일 것 같다고 생각했습니다.

// 2. 코드 설명
// { hit: 0, hot: 1 }
// { hit: 0, hot: 1, dot: 2, lot: 2 }
// { hit: 0, hot: 1, dot: 2, lot: 2, dog: 3 }
// { hit: 0, hot: 1, dot: 2, lot: 2, dog: 3, log: 3 }
// { hit: 0, hot: 1, dot: 2, lot: 2, dog: 3, log: 3, cog: 4 }
// { hit: 0, hot: 1, dot: 2, lot: 2, dog: 3, log: 3, cog: 4 }


//시간 복잡도 -> O(n^2) while 반복문안에 forEach
// 테스트 1 〉	통과 (0.17ms, 33.5MB)
// 테스트 2 〉	통과 (0.51ms, 33.5MB)
// 테스트 3 〉	통과 (0.95ms, 33.7MB)
// 테스트 4 〉	통과 (0.27ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
