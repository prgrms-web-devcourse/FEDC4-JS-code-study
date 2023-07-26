/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // 연속적인 문자의 최대 수는? -> k번으로 이 res개의 연속을 만들 수 있나?
  let res = 0;
  let left = 1;
  let right = answerKey.length;

  let temp = answerKey[0];
  let times = 0;
  const consecutiveBoolTimesArr = answerKey.split("").reduce((acc, cur) => {
    if (temp === cur) {
      times += 1;
    } else {
      acc.push(times);
      times = 1;
      temp = cur;
    }
    return acc;
  }, []);
  consecutiveBoolTimesArr.push(times);

  console.log(consecutiveBoolTimesArr);

  const isGanuengWithK = (consecutiveTime) => {
    for (let i = 0; i <= consecutiveBoolTimesArr.length; i++) {
      let currentLeftTime = k;
      let currentIdx = i;
      let sums = consecutiveBoolTimesArr[i];
      if (sums >= consecutiveTime) return true;

      while (currentIdx < consecutiveBoolTimesArr.length) {
        const nextTime =
          currentLeftTime - consecutiveBoolTimesArr[currentIdx + 1];
        if (nextTime < 0) {
          sums += currentLeftTime;
          break;
        }
        if (!isNaN(consecutiveBoolTimesArr[currentIdx + 1])) {
          sums += consecutiveBoolTimesArr[currentIdx + 1];
        } else {
          break;
        }
        if (!isNaN(consecutiveBoolTimesArr[currentIdx + 2])) {
          sums += consecutiveBoolTimesArr[currentIdx + 2];
        } else {
          break;
        }
        currentLeftTime -= consecutiveBoolTimesArr[currentIdx + 1];
        currentIdx += 2;
      }
      if (sums >= consecutiveTime) return true;
    }

    // for(let i =consecutiveBoolTimesArr.length-1; i>=0; i--){
    //     let currentLeftTime = k
    //     let currentIdx = i
    //     let sums = consecutiveBoolTimesArr[i]
    //     if(sums >= consecutiveTime) return true

    //     while(currentLeftTime > 0) {
    //         const nextTime = currentLeftTime - consecutiveBoolTimesArr[currentIdx-1]
    //         if(nextTime < 0) {
    //             sums += currentLeftTime
    //             break
    //         }
    //        if(!isNaN(consecutiveBoolTimesArr[currentIdx-1])) {sums += consecutiveBoolTimesArr[currentIdx-1]} else {break}
    //        if(!isNaN(consecutiveBoolTimesArr[currentIdx-2])) {sums += consecutiveBoolTimesArr[currentIdx-2]} else {break}
    //         currentLeftTime -= consecutiveBoolTimesArr[currentIdx-1]
    //         currentIdx-=2
    //     }
    //     if(sums >= consecutiveTime) return true
    // }

    return false;
  };

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isGanuengWithK(mid)) {
      left = mid + 1;
      res = Math.max(mid, res);
    } else {
      right = mid - 1;
    }
  }

  return res;
};

/*
1. 알고리즘 or 자료구조 선택 이유

2. 시간 복잡도 or 결과

3. 기타 의견 
온기가 남지않은 싸늘한 코드...
parametric search를 적용하려고 틀 작성해 둔 것과, k번으로 가능한지를 판단하는 코드를 짠 것 까지는 잘 한 것 같은데,
isGanuengWithK = (consecutiveTime) => {} 요놈을 못 구하겠습니다...
단순히 1씩 늘려가며 체크하면 time limit에 걸리고, 저는 연속되는 개수를 압축해서 처음부터 배열에 담고 사용하려했는데, 구현이 잘 안되네요...

4. 참고 링크

*/
