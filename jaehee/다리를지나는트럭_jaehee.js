function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let currentWeight = 0;
  const onBridges = [];

  while (truck_weights.length || onBridges.length) {
    answer++; // 1초 증가

    // 다리를 지난 트럭이 있으면 제거
    if (onBridges.length) {
      const [weight, time] = onBridges[0];
      if (time + 1 > bridge_length) {
        onBridges.shift();
        currentWeight -= weight;
      }
    }

    // 다리에 있는 트럭들의 위치를 한칸씩 이동
    onBridges.forEach(([weight, time], idx, arr) => {
      arr[idx] = [weight, time + 1];
    });

    // 다리에 새로운 트럭이 올라갈 수 있으면 올림
    const newTruck = truck_weights[0];
    if (currentWeight + newTruck <= weight) {
      currentWeight += newTruck;
      onBridges.push([truck_weights.shift(), 1]);
    }
  }

  return answer;
}

// 28m

/*
1. 알고리즘 or 자료구조 선택 이유
큐를 사용하여 풀었습니다. 다리를 지나는 트럭의 무게와 시간을 저장하는 배열을 사용했습니다.

2. 시간 복잡도 or 결과
O(n)? 

3. 기타 의견 
예전에 풀었던 디스크 컨트롤러 문제가 생각나는 문제였던 것 같습니다.

4. 참고 링크

*/
