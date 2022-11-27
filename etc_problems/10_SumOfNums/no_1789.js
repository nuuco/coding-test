const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

const solution = (num) => {
  let sum = 0;

  if(num === 1) return 1;

  for(let i = 1; i <= num; i++) {
    sum += i;

    if(sum > num) {
      return i - 1;
    }
  } 
}

console.log(solution(input));

/** 풀이
 * 서로 다른 수 n개를 더해서 input 을 만들 때 n의 최댓값은?
 * 
 * 최댓값이니 작은수부터 모조리 더해줘야한다. 
 * 즉 1에서 부터 1씩 증가한 값을 계속 더해준다고할 때,
 * 1 ~ m 까지 더하다보면 어느순간 num 을 넘게 될 것이다. 
 * 그러면 m - 1 개가 최댓값이다. 왜냐? 1 ~ (m - 1)까지 더한 값은 input 보다 작을 텐데
 * 그 차이가 d 라고 하면 그 값을 마지막 m - 1 에 더해주면 input 값이 완성이 된다. 
 * 즉 input 값은 
 * 1 ~ (m - 2) 의 합 + (m - 1 + d) 의 합으로 완성되니까! 
 * 
 * > input 이 1인 경우는 예외로 처리해준다.
 */

