function solution(clothes) {
    
    let result = {};
    let count = 1;

    // clothes 배열을 순회하며 의상을 key로 result 객체에 저장 
    clothes.forEach((v)=>{
        result[v[1]] = (result[v[1]] || 0) + 1;
    })

    let all = Object.values(result);

    // 각 의상에서 입지 않을 경우를 생각해 +1 하여 경우의 수를 구함
    all.forEach((v)=>{
        count *= v + 1;
    })
    
    // 경우의 수에서 둘 다 입지 않았을 경우를 생각해 -1
    return count - 1;
}

/*
1. 알고리즘 or 자료구조 선택 이유
경우의 수를 구하기 위해서 의상을 종류별로 저장할 수 있는 자료구조가 필요하다고 생각했습니다.

2. 시간 복잡도 or 결과
시간 복잡도: O(n) 배열과 객체를 순회

3. 기타 의견
배열을 순회하며 객체에 정보를 저장하는 부분에서 미흡하여 시간이 많이 지체된 것 같습니다.
4. 참고 링크

*/