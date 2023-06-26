var ProductOfNumbers = function() {
    this.queue = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.queue.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    const result = this.queue.slice(-(k))
    return result.reduce((acc,cur)=> acc * cur)
};

/*
1. 알고리즘 or 자료구조 선택 이유
큐 문제 목록에 있길래 배열 이름을 큐로 설정했는데 스택과 더 유사한 것 같습니다..

2. 시간 복잡도 or 결과
O(n)

3. 기타 의견 
리트 코드를 처음 풀어보는데 번역을 해도 이게 뭔 뜻이지 하고 이해하는데 좀 시간이 걸린 것 같습니다!
*/