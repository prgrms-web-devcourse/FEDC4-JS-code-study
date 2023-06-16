function solution(n, times) {
    
    let left = 1; // 최소 1분은 걸림
    let right = Math.max(...times) * n;

    while(left <= right){
        const middle = Math.floor((left + right) / 2);
        
        const total = times.reduce((acc,cur)=> acc + Math.floor(middle / cur), 0);
        
        if(total >= n){ //더 많은 사람을 처리할 수 있다는 뜻이므로 범위를 줄이자
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return left;
}

// 1. 알고리즘 or 자료구조 선택 이유
// 이진 탐색을 이용하여 n명의 입국자를 처리하는데 소요되는 가장 최소의 시간을 구했습니다.
// 마지막 비교문에서 total >= n 을 통해 6명을 처리할 수 있는 시간이어도 right를 줄이며 최소값을 찾았습니다.

// 2. 코드 설명
// 2-1. 최소 1분은 소요되므로 초기 left의 값은 1, 최악의 경우는 times 배열을 정렬하는 것보다 max를 뽑는게 효율적이라 생각하여 max를 뽑아 * n 해주었습니다.Math
// 2-2. 시간 범위를 줄이거나 늘리는 식으로 최소 값을 탐색하였습니다. 

//시간 복잡도
// 테스트 1 〉	통과 (0.12ms, 33.6MB)
// 테스트 2 〉	통과 (0.29ms, 33.5MB)
// 테스트 3 〉	통과 (1.96ms, 36MB)
// 테스트 4 〉	통과 (79.30ms, 42.3MB)
// 테스트 5 〉	통과 (78.70ms, 41.8MB)
// 테스트 6 〉	통과 (69.81ms, 39.6MB)
// 테스트 7 〉	통과 (97.84ms, 42.5MB)
// 테스트 8 〉	통과 (117.21ms, 42.4MB)
// 테스트 9 〉	통과 (0.19ms, 33.6MB)