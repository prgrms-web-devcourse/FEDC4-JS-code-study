# 이분탐색 알고리즘

탐색 범위를 절반 씩 좁혀가며 데이터를 탐색하는 알고리즘.

- 정렬되어 있는 데이터를 대상으로 한다.
- `start` `end` `mid` 를 사용하여 탐색한다.
  - 중간 값보다 **target 값이 크다면** 중간 값보다 작은 수는 더 이상 범위에 해당하지 않기에 **start의 값은 mid + 1**이 됩니다.
  - 중간 값보다 **target 값이 작다면** 중간 값보다 큰 수는 더 이상 범위에 해당하지 않기에 **end의 값은 mid - 1**이 됩니다.
- `O(logN)` 의 시간 복잡도를 가진다.
- 재귀와 반복문의 두 가지 방법으로 구현 가능하다.

예시코드

```jsx
// 반복
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let cnt = 0;

  while (start <= end) {
    cnt += 1;
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return "found!", cnt;
    } else {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return "not found!";
}
```

```jsx
// 재귀
function binarySearch(start, end, arr, target) {
  if (start > end) {
    return "not found!";
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return "found!";
  } else {
    if (arr[mid] < target) {
      binarySearch(mid + 1, end, arr, target);
    } else {
      binarySearch(start, mid - 1, arr, target);
    }
  }
}
```

# Parametric Search

이분탐색에서 어려운 유형하면 주로 이 유형이라고 생각…

파라메트릭 서치는 **최적화 문제를 결정 문제로 바꾸어 푸는 것**이다.

문제가 조건에 따라 정렬되어 있을 때(그렇지 않다면 정렬 가능할 때), 최소값이나 문제의 조건에 가장 최적화된 답을 찾는 문제를 **예-아니오로 대답할 수 있는 문제**로 바꾸어 생각하는 것이다.

ex) 운전 가능한 나이를 가진 사람(19세 이상) 중 가장 어린 사람의 번호는?

→ 나이 순 정렬된 자료가 있거나, 정렬 가능한가?

→ 운전 가능한 사람인가? 의 반복을 구하는 문제로 변경

- 이분 탐색과 같이 `O(logN)` 의 시간복잡도를 가진다.
- 이분 탐색과의 차이점은 결정 문제인지 아닌지의 차이이다.

### 이분탐색으로 해결 안되는데 parametric search로 해결되는 경우는?

둘 다 시간복잡도는 같다.

하지만 파라메트릭 서치는 **특정 값을 만족하는 최소 또는 최대 값을 찾기**의 케이스에 좋은 효율과 접근을 제공한다.

- 주어진 시간 내에 특정 작업을 완료하는 데 필요한 리소스 찾기
- 특정 조건을 만족하는 최대 또는 최소 크기 구하기
