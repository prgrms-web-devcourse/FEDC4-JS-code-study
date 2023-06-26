function solution(bridge_length, weight, truck_weights) {
    
    let bridge = Array(bridge_length).fill(0); //다리를 올라갈 수 있는 트럭 수 
    let time = 0;
    
    while(bridge.length){
        
        bridge.shift();

        if(truck_weights.length){
            const truck_sum = bridge.reduce((acc,cur)=>acc+cur,0);
            if(truck_sum + truck_weights[0] <= weight){
                const current = truck_weights.shift();
                bridge.push(current);
            }else{
                bridge.push(0);
            }
        }

        time++;
    }

    return time;
}


/*
1. 알고리즘 or 자료구조 선택 이유
다리에 올라간 순서대로 빠져나가기 때문에 큐를 사용해서 풀었습니다!

2. 시간 복잡도 or 결과
O(n)인 것 같습니다.

3. 기타 의견 
예전에 프로그래머스 준비하면서 풀어보았던 문제인데 다시 풀어봐도 비슷한 방식으로 풀게 되는것 같아요..
*/