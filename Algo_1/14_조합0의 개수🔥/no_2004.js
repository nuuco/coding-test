const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//입력값이 20억이기 때문에 기존 조합 풀이로는 시간 초과 (메모리 초과)가 난다.
//0 이 나오는 이유에 대해 알아보자. -> 10을 인수로 가지고 있기 때문 
//-> 10을 인수로 몇 개 가지고 있는지 확인하면 된다. 10 = 2 * 5

/**
 * nCm = n! / ((n - m)m!)
 * n! 의 값을 구하지 않고, 소인수 분해했을 때 5가 몇개 있는지 파악해보자.
 * n 이하의 수 중 5의 배수는 5를 최소 1개씩 갖고 있다.
 * 그중 25의 배수는 5를 2개 이상 갖고 있다.
 * 또 그중 125의 배수는 5를 3개 이상 갖고 있다.
 * 따라서
 * n 이하의 5의 배수의 개수 + n 이하 25의 배수의 개수 + n 이하 125의 배수의 개수 + ...를 계산해주면, 
 * 5의 배수에 대해선 1씩, 25의 배수에 대해선 2씩, 125의 배수에 대해선 3씩... 더한 값이 된다.
 * 이는 즉, n!이 소인수분해했을 때 갖고 있는 전체 5의 개수다. 
 * 
 * 우리가 알아내야하는 건 10을 몇 개 가지고 있느냐이기 때문에,
 * 같은 방식으로 2가 몇 개있는지 파악한다.
 * 
 * 조합의 5의 개수 = n!의 5개수 - ((n - m)!의 5개수 + m!의 5개수)
 * 조합의 2의 개수 = n!의 2개수 - ((n - m)!의 2개수 + m!의 2개수)
 * 조합의 10 개수 = 5의 개수와 2의 개수중 가장 작은 수가 10의 개수이다.
 */


//n! 5 인수가 몇개 있는지 체크하는 함수
const find_5 = (n) => {
  const max = parseInt(Math.log(n) /  Math.log(5));
  //log 밑 변환 공식 사용. -> log5(n) === log(n) / log(5)
  let count = 0;
  for(let i = 1; i <= max; i++) { //5, 25, 125 ... 가 n 안에 몇개 있는지
    count += parseInt(n / 5**i);
  }
  return count;
}

//n! 2 인수가 몇개 있는지 체크하는 함수
const find_2 = (n) => {
  const max = parseInt(Math.log(n) /  Math.log(2));
  //log 밑 변환 공식 사용. -> log2(n) === log(n) / log(2)
  let count = 0;
  for(let i = 1; i <= max; i++) { //2, 4, 8... 가 n 안에 몇개 있는지
    count += parseInt(n / 2**i);
  }
  return count;
}

const count_5 = find_5(n) - find_5(n - m) - find_5(m);
const count_2 = find_2(n) - find_2(n - m) - find_2(m);
const answer = count_2 < count_5 ? count_2 : count_5;

console.log(answer);