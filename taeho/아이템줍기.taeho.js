function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 좌표를 두배로 늘린다
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2
    const doubleRectangle = rectangle.map((rec) => rec.map((value)=> value * 2))
    
    const moving = [[0,1], [0,-1], [-1,0], [1,0]]
    
    const queue = [[characterX, characterY, 0]]
    
    //모든 좌표값이 50이므로 * 2를 했을 때 초과되지 않게 102 길이를 가진 2차원 배열을 0으로 초기화
    const range = Array.from({length : 102}, () => Array(102).fill(0))
    
    
    for(const [x1, y1, x2, y2] of doubleRectangle){
        for(let i=x1; i<=x2; i++){ //좌측 하단 x에서 우측 상단 x까지 가는 루트
            for(let j=y1; j<=y2; j++){  //좌측 하단 y에서 우측 상단 y까지 가는 루트
                if(i === x1 || i === x2 || j === y1 || j === y2){
                    if(range[i][j] === 0){
                        range[i][j] = 1 // 이게 테두리
                    }
                }else{
                    range[i][j] = 2 // 테두리가 아닌 것은 2로 초기화
                }
            }
        }
    }
    
    //시작점은 미리 방문 체크
    range[characterX][characterY] = 0
    
    while(queue.length){
        const [curX, curY, move] = queue.shift()
        
        if(curX === itemX && curY === itemY) return move / 2
        
        for(let i=0; i<moving.length; i++){
            const nowX = curX + moving[i][0]
            const nowY = curY + moving[i][1]
            
            //테두리면 queue에 푸쉬한 후 방문 체크
            if(range[nowX][nowY] === 1){
                queue.push([nowX,nowY,move+1])
                range[nowX][nowY] = 0
            }
        }
    }
    return -1
}

/*
1. 알고리즘 or 자료구조 선택 이유
아이템을 찾아가는 최단 거리를 반환하는 것이기 때문에 BFS를 사용했습니다.

2. 시간 복잡도 or 결과
시간 복잡도: O(n * 좌표 가로 * 세로)
어려운 부분이 많아서 시간복잡도 계산이 어려운 것 같습니다. 틀린 답이라면 알려주시면 감사하겠습니다!!

3. 기타 의견
문제를 완벽하게 이해하기가 힘들어서 구글링을 통해 풀었습니다.. for문으로 테두리를 체크해주는 부분까지는 생각을 했는데
좌표를 두배로 늘려주지 않으면 발생하는 문제에 대해서는 파악이 힘들더라구요..

3. 참고 링크
https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%95%84%EC%9D%B4%ED%85%9C-%EC%A4%8D%EA%B8%B0-JavaScript
*/