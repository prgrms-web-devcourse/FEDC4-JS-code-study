/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let high = height[0];
  let sum = 0;
  const st = [height[0]];

  for (let i = 1; i < height.length; i++) {
    if (high <= height[i]) {
      while (st.length > 0) {
        const temp = st.pop();
        if (temp === high) {
          break;
        } else {
          sum += high - temp;
        }
      }
      high = height[i];
    }
    st.push(height[i]);
  }

  const height2 = [...st].reverse();
  let high2 = height2[0];
  let sum2 = 0;

  for (let i = 1; i < height2.length; i++) {
    if (high2 <= height2[i]) {
      while (st.length > 0) {
        const temp = st.pop();
        if (temp === high2) {
          break;
        } else {
          sum2 += high2 - temp;
        }
      }
      high2 = height2[i];
    }
    st.push(height2[i]);
  }

  return sum + sum2;
};

/*
1. 알고리즘 or 자료구조 선택 이유
스택

2. 시간 복잡도 or 결과
스택에서 뽑아 쓰는 부분 때문에 O(n^2) 나올 듯?

Runtime
106
ms
Beats
12.10%
of users with JavaScript
Memory
45.19
MB
Beats
34.83%
of users with JavaScript

3. 기타 의견 
처음에 포인터로 했는데 left, right 위치를 잘못 둔 것 같다. 
실패해서 스택으로 앞 뒤 두 번 돌도록 품

4. 참고 링크

*/
