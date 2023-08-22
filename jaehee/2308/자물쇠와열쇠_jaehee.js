function solution(key, lock) {
    let answer = true;
    const sheet = Array.from({length: 20},()=>Array.from({length:20},()=>2))
    
    const turn = (keyMap) => {
        const newMap = Array.from({length: key.length}, ()=> Array.from({length: key.length},()=>0))
        keyMap.forEach((keyRow, x) => {
            keyRow.forEach((keyCol, y) => {
                newMap[]
            })
        })
    }
    
    const isAnswer = () => {
        
    }
    
    return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
구현

2. 시간 복잡도 or 결과
못 풀었습니다.
함수 설정은 맞는 것 같은데 피지컬이 안되네요.

3. 기타 의견 

4. 참고 링크

*/