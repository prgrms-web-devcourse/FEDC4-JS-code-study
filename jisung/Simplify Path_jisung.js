/**
 * @param {string} path : 주어진 절대경로!
 * @return {string}
 */

// 1. 만약 path의 맨 뒤가 /라면 없애준다. (stack에서 pop)
// - 무조건 /가 나와야하니까 split으로 일단 쪼개준 다음 join 할 때 생각하자.

// 2. 만약 ..가 나온다면 앞에 경로를 삭제해준다.
// - stack.pop()

// 3. 만약 //가 나온다면 / 1개만 써준다.
// /는 ㅇㅋ 2번째 /는 깔끔하게 무시하면 됨

// 4. 중간에 나오는 영어는 신경 안 써줘도 되고,
// - 그냥 ..이랑 /만 신경써주면 돼! 제발 신경ㄴ

const simplifyPath = function (path) {
  const stack = [];

  // 중간에 좀 필요없는 것들은 제거하기 위해서 filter를 사용
  // - 마지막에 들어있는 /
  const pathArr = path.split("/").filter((path) => path !== "");

  for (let path of pathArr) {
    if (path === ".") {
      // .는 생략이 가능하다.
      continue;
    } else if (path === "..") {
      // 수정을 못 해서 냈네요!! 죄송합니다ㅎㅎ
      stack.pop();
      //는 앞에 경로를 삭제해야해서, 이미 들어가있는 stack의 원소를 삭제
    } else {
      // //도 아니고 .도 아닐경우엔 그냥 stack에 넣어주면 된다.
      stack.push(path);
    }
  }

  return "/" + stack.join("/");
  // 무조건 앞에 /가 와야하기 때문에 /를 해줬고,
  // split할 때 /를 없애줬으니 다시 합칠 땐 '/'를 해줘야한다.
};
console.log(simplifyPath("//home"));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("//home/"));
/*

1. 알고리즘 or 자료구조 선택 이유
- 뭔가 문자열이 주어지고, 그 문자열을 중간중간 생각을 하면서 뺐다, 넣었다 이런식으로 풀 때는 
  stack이 최고인거같아요! 

2. 시간 복잡도 or 결과
- O(N)

3. 기타 의견 
- 이번 문제는 예외가 대놓고 나와있어서 그 동안 풀었던 문제중 가장 쉬운 측에 속하는 것 같아요!
- 다음문제 빠이팅.. 

4. 참고 링크

*/
