//2023.07.26 13:38~14:54
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function (nums, maxOperations) {
  // nums = [2,4,8,2], maxOperations = 4

  nums.sort((a, b) => a - b);
  // nums = [2,2,4,8], maxOperations = 4

  let left = 1; // 최소 1
  let right = nums.at(-1); // 최대 8

  function search(mid) {
    let cnt = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
      // 해당 값을 mid 값으로 나누고, 올림하여 필요한 작업 횟수 구함
      cnt += Math.ceil(nums[i] / mid) - 1;
      if (cnt > maxOperations) {
        return false;
      }
    }
    return true;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 4
    if (search(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/*
1. 알고리즘 or 자료구조 선택 이유
파라매트릭 서친

2. 시간 복잡도 or 결과
Runtime - 240ms 15%
Memory - 53.17MB 75%

3. 기타 의견
search 함수 부분은 gpt의 도움을 받았습니다 ㅜ

4. 참고 링크


*/
