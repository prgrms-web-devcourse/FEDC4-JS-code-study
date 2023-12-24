class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(val) {
    this.heap.push(val); // 아래에 추가
    let currentIndex = this.heap.length - 1; // 현재 인덱스
    let parentIndex = this.floor(currentIndex / 2); // 부모 인덱스

    // 최상단이 아니고, 부모 노드보다 현재 노드가 작을 때 실행
    while (
      parentIndex !== 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this._swap(currentIndex, parentIndex); // 부모 노드와 위치 변경
      currentIndex = parentIndex; // 현재 위치 변경
      parentIndex = Math.floor(currentIndex / 2); // 부모 노드 갱신
    }
  }

  pop(isTopPop) {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();
    // 최댓값 삭제
    if (!isTopPop) {
      const parentIndex = Math.floor((this.heap.length - 1) / 2); // 마지막 노드의 위쪽 부모 노드
      const lastLeaf = this.heap.slice(parentIndex); // 부모~마지막까지 추출
      const max = Math.max(...lastLeaf); // 그 중 최댓값 -> 가장 큰 값
      this._swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1); // 가장 큰 값과 끝 노드를 교환
      return this.heap.pop(); // 가장 큰 값 pop
    }

    // 최솟값 삭제
    const val = this.heap[1];
    this.heap[1] = this.heap.pop(); // 가장 마지막 노드를 최상단에 위치

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 부모 노드가 자식 노드보다 클 경우
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex] > this.heap[leftIndex]) ||
      (this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex])
    ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex] > this.heap[rightIndex]) {
        this._swap(currentIndex, rightIndex);
        currentIndex = rightIndex; // 오른쪽 왼쪽 중 더 작은 값과 변경
      } else if (this.heap[leftIndex] <= this.heap[rightIndex]) {
        this._swap(currentIndex, leftIndex);
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2; // 왼쪽 자식 갱신
      rightIndex = currentIndex * 2 + 1; // 오른쪽 자식 갱신
    }

    return val;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  result() {
    if (this.heap.length === 1) return [0, 0];
    if (this.heap.length === 2) return [this.heap[1], this.heap[1]];
    const parentIndex = Math.floor((this.heap.length - 1) / 2);
    const lastLeaf = this.heap.slice(parentIndex);
    const max = Math.max(...lastLeaf);
    return [max, this.heap[1]];
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
