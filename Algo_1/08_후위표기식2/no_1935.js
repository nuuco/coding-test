const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [t, ex, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
t = Number(t);
arr = arr.map(Number);

/**
 * 후기 표기법 풀이
 * 1. 숫자가 나오면 스택에 넣는다.
 * 3. 연산자가 나오면 스택에서 2개의 숫자를 꺼내 연산 후 다시 스택에 넣는다.
 * 3. 모든 연산 후 마지막에 스택에 남은 1개의 값이 결과다.
 */

const operate = (a, b, oper) => {
  switch(oper) {
    case "+":
      return Number((a + b).toFixed(4));
    case "-":
      return Number((a - b).toFixed(4));
    case "*":
      return Number((a * b).toFixed(4));
    case "/":
      return Number((a / b).toFixed(4));
    case "%":
      return Number((a % b).toFixed(4));
  }
}

const stack = [];
for(let char of ex) {
  if(/[A-Z]/.test(char)) {
    stack.push(arr[char.charCodeAt() - 65]);
  } else {
    const num_1 = stack.pop();
    const num_2 = stack.pop();
    stack.push(operate(num_2, num_1, char)); 
    // '/', '%' 연산자 일때 숫자 순서가 바뀌면 안되니까 
  }
}

console.log(stack[0].toFixed(2));
