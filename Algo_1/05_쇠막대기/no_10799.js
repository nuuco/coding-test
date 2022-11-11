const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

/**
 * 1. 한 괄호씩 읽는다.
 * 2. ( 다음이 ) 이 아닌 (인 경우 배열에 0을 추가한다.
 * 3. () 를 만날 때마다 배열 모든 요소의 값 +1
 * 4. ) 다음에 )를 만나면 배열 마지막 요소에 +1 한 뒤 pop
 * 5. pop을 한 값을 최종 sum 에 추가
 */
console.log(input.length)
let sum = 0;
const sticks = [];

for(let i = 0; i < input.length; i++) {
  if(i < input.length - 1 && input[i] === "(" && input[i + 1] === ")") { //레이저 인 경우
    sticks.forEach((el, idx) => sticks[idx] += 1);
    i++;
  } else {
    if(input[i] === "(") {
      sticks.push(0);
    } else { //input[i] === ")"
      sum += sticks.pop() + 1;
    }
  }
}
console.log(sum);

