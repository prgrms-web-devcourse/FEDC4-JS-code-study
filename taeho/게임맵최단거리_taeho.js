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

function solution(maps) {
    
    const queue = new Queue();
        
    const goalY = maps.length - 1, goalX = maps[0].length - 1; // 골인지점 
    const maxY = maps.length, maxX = maps[0].length;
    const moving = [[0,1],[1,0],[0,-1],[-1,0]]; // 남 -> 동 -> 북 -> 서
    
    queue.enqueue([0,0,1]);
    maps[0][0] = 0;
    while(queue.size){
        const [curX, curY, move] = queue.dequeue(); // 현재 X,Y 좌표와 움직임횟수

        if(curX === goalX && curY === goalY){
            return move;
        }
    
        for(let i=0; i < moving.length; i++){
            const nowX = curX + moving[i][0];
            const nowY = curY + moving[i][1];
            if(nowX >= 0 && nowX < maxX && nowY >= 0 && nowY < maxY && maps[nowY][nowX] === 1){ 
                queue.enqueue([nowX, nowY, move+1])
                maps[nowY][nowX] = 0;
            }
        }
    }
    return -1;
}

// 1. 알고리즘 or 자료구조 선택 이유
// 최단거리 알고리즘은 BFS로 풀어야한다는 글을 본 적이 있어서 BFS로 구현했습니다. 

// 2. 코드 설명
// 그림으로 주어진 케이스의 경우 남, 동, 북, 서 순서로 탐색하는게 가장 효율적이라고 생각하여 moving 배열에 값을 할당했습니다.

//시간 복잡도 -> O(n^2) while 반복문안에 for 반복문
// 테스트 1 〉	통과 (0.28ms, 33.5MB)
// 테스트 2 〉	통과 (0.31ms, 33.5MB)
// 테스트 3 〉	통과 (0.29ms, 33.5MB)
// 테스트 4 〉	통과 (0.29ms, 33.4MB)
// 테스트 5 〉	통과 (0.29ms, 33.5MB)
// 테스트 6 〉	통과 (0.30ms, 33.6MB)
// 테스트 7 〉	통과 (0.32ms, 33.5MB)
// 테스트 8 〉	통과 (0.28ms, 33.5MB)
// 테스트 9 〉	통과 (0.31ms, 33.5MB)
// 테스트 10 〉	통과 (0.33ms, 33.5MB)
// 테스트 11 〉	통과 (0.29ms, 33.4MB)
// 테스트 12 〉	통과 (0.28ms, 33.6MB)
// 테스트 13 〉	통과 (0.30ms, 33.5MB)
// 테스트 14 〉	통과 (0.28ms, 33.5MB)
// 테스트 15 〉	통과 (0.29ms, 33.4MB)
// 테스트 16 〉	통과 (0.15ms, 33.5MB)
// 테스트 17 〉	통과 (0.31ms, 33.5MB)
// 테스트 18 〉	통과 (0.15ms, 33.6MB)
// 테스트 19 〉	통과 (0.14ms, 33.5MB)
// 테스트 20 〉	통과 (0.14ms, 33.6MB)
// 테스트 21 〉	통과 (0.14ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (40.50ms, 37.9MB)
// 테스트 2 〉	통과 (29.89ms, 37.6MB)
// 테스트 3 〉	통과 (33.26ms, 37.9MB)
// 테스트 4 〉	통과 (27.39ms, 37.7MB)