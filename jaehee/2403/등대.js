function solution(n, lighthouse) {
  let answer = 0;

  const maps = new Map();
  const counts = Array.from({ length: n + 1 }, () => 0);
  let now = [0, 0];
  for (let lighth of lighthouse) {
    const [a, b] = lighth;
    maps.has(a) ? maps.get(a).push(b) : maps.set(a, [b]);
    maps.has(b) ? maps.get(b).push(a) : maps.set(b, [a]);
    counts[a]++;
    counts[b]++;

    if (counts[a] > now[1]) {
      now = [a, counts[a]];
    }

    if (counts[b] > now[1]) {
      now = [b, counts[b]];
    }
  }

  while (now[1] > 0) {
    const [start, value] = now;

    const peers = maps.get(start);
    counts[start] = 0;
    answer++;
    now = [0, 0];
    for (let peer of peers) {
      counts[peer]--;
    }

    for (let i = 1; i < counts.length + 1; i++) {
      if (counts[i] > now[1]) {
        now = [i, counts[i]];
      }
    }
  }

  return answer;
}

/*
1. 알고리즘 or 자료구조 선택 이유
내 풀이를 이용하려면 매 루프마다 최대 연결 개수인 노드를 찾아야 하기 때문에 heap queue 같은게 필요하다.

대신 문제에서 원형 루프가 발생하지 않는 조건을 활용하면 단 하나의 연결 노드만 있는 노드 대상으로 해당 연결 노드를 켜주는 것으로 그리디하게 풀 수 있다.

2. 시간 복잡도 or 결과

3. 기타 의견 
문제 조건부터 잘 따져보기

4. 참고 링크

*/

function solution(n, lighthouse) {
  let answer = 0;

  const maps = new Map();
  const counts = Array.from({ length: n + 1 }, () => 0);

  for (let lighth of lighthouse) {
    const [a, b] = lighth;
    maps.has(a) ? maps.get(a).push(b) : maps.set(a, [b]);
    maps.has(b) ? maps.get(b).push(a) : maps.set(b, [a]);
    counts[a]++;
    counts[b]++;
  }

  while (lighthouse.length) {
    const singles = Array.from(maps.entries()).filter((v) => v[1].length === 1);

    for (let singleNode of singles) {
      const [idx, peers] = singleNode;
      if (counts[idx] !== 1) continue;
      const peer = peers[0];
      for (let near of maps.get(peer)) {
        counts[near]--;
        maps.set(
          near,
          maps.get(near).filter((v) => v !== peer)
        );
      }
      counts[peer] = 0;
      maps.set(peer, []);
      answer++;
    }

    lighthouse = lighthouse.filter(([a, b]) => counts[a] > 0 && counts[b] > 0);
  }

  return answer;
}
