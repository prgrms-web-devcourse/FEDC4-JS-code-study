/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
	let count = 0;
	let sum = 0;
	const remainderCount = { 0: 1 };

	for (const num of nums) {
		sum += num;
		let remainder = sum % k;
		if (remainder < 0) {
			remainder += k;
		}
		count += remainderCount[remainder] || 0;
		remainderCount[remainder] = (remainderCount[remainder] || 0) + 1;
	}

	return count;
};

/*
1. 알고리즘 or 자료구조 선택 이유
gpt의 힘을 빌렸습니다.. 분명 나누어떨이지는 값을 계산하는 풀이인데 나누어 떨어지지 않아도 나머지가 같으면 count에 더해주는 방식이...
공고를 나와서 그런지 수학공식이 나오면 머리만 아프네요..

문제에서 요구하는 것은 합이 k로 나누어 떨어지는 부분 배열의 개수를 찾는 것입니다. 따라서, 우리는 배열의 부분 배열들을 검사하면서 합을 계산하고, 
이 합이 k로 나누어 떨어지는지 확인해야 합니다. 나누어 떨어지는 값들을 구하기 위해 나머지 연산을 사용하는 이유는 다음과 같습니다:

1. sum을 k로 나눈 나머지를 구합니다. 이를 remainder라고 합시다.

2. 만약 remainder가 0이라면, sum이 k로 나누어 떨어진다는 의미입니다. 따라서 현재까지의 부분 배열의 합이 k로 나누어 떨어지는 것입니다.

3. 그렇지 않다면, remainder가 0이 아니기 때문에 sum은 k로 나누어 떨어지지 않습니다. 이 경우에는 다음과 같은 성질을 이용합니다: 
"만약 a를 k로 나눈 나머지가 b이고, c를 k로 나눈 나머지가 다시 b라면, a - c는 k로 나누어 떨어집니다."

4. 따라서, remainder와 동일한 나머지가 이전에 나온 부분 배열을 찾아야 합니다. 이를 위해 remainderCount라는 객체를 사용하여 
나머지별로 나온 횟수를 저장합니다. 이전에 나온 나머지가 있다면, 해당 나머지가 발생한 횟수를 count에 더해주면 됩니다.

요약하면, remainder를 이용하여 나머지 연산을 수행함으로써, 합이 k로 나누어 떨어지는 부분 배열을 효과적으로 찾을 수 있습니다. 
remainder가 0이면 바로 카운트되고, 그렇지 않은 경우 이전에 나온 나머지를 통해 부분 배열의 개수를 세는 것입니다.

2. 시간 복잡도 O(n)
Runtime 94 ms Beats 17.4%
Memory 46.5 MB Beats 76.30%
*/
