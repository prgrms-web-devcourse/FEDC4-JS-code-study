## 해시(Hash) 알고리즘

<img src='https://velog.velcdn.com/images%2Fjangws%2Fpost%2Ff2303335-5f1c-4889-8dfb-819b78d4ca9d%2F1200px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' width='500px'/>

해시(Hash) 함수는 임의 크기의 데이터를 고정된 크기의 데이터로 매핑하는 함수를 의미한다. 이 때 매핑된 데이터를 해시 값(Hash Value) 또는 해시 코드(Hash Code)라고 한다.

해시 알고리즘은 다양한 용도로 사용된다. 예를 들어, 검색 엔진에서 검색어를 해시 값으로 변환하여 검색 속도를 빠르게 하거나, 데이터베이스에서 데이터를 검색하기 위해 인덱스로 사용될 수 있다.

매우 빠른 데이터 검색을 할 수 있는 이유는 데이터를 검색할 때 사용할 key와 실제 데이터의 값(value)이 한 쌍으로 존재하고, key 값이 배열의 인덱스로 변환되기 때문에 검색과 저장의 평균적인 시간 복잡도가 O(1)에 수렴하게 된다.

자바스크립트에서는 Object 클래스에 내장된 메서드인 hashCode()를 사용하여 해시 값을 구할 수 있다. 또한, ES6부터는 **Map**과 **Set**과 같은 자료구조를 사용하여 해시 테이블을 구현할 수 있다.

#### Map을 활용한 해시 테이블 예시

> - 탐색은 get(), 삽입은 set()으로 한다.
> - 찾기는 has(), 삭제는 delete(), 크기는 size()
> - key는 고유값으로 단 한 개만 존재한다.
> - key 가능 자료형 : number, string, function, object, NaN

```
function hash(str) {
  let map = new Map();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], map.size);
    }
    result += map.get(str[i]);
  }
  return result;
}

console.log(hash('hello')); // 출력 결과: "01233"
console.log(hash('world')); // 출력 결과: "01234"
```

<br>

#### Set을 활용한 해시 테이블 예시

```
function hash(str) {
  let set = new Set();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
    }
    result += Array.from(set).indexOf(str[i]);
  }
  return result;
}

console.log(hash('hello')); // 출력 결과: "01233"
console.log(hash('world')); // 출력 결과: "01234"
```

<br>

### 예시 문제

프로그래머스 ['완주하지 못한 선수'](https://school.programmers.co.kr/learn/courses/30/lessons/42576) 문제

한 명의 선수만 마라톤을 완주하지 못했다. 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 구한다.

```
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
```
