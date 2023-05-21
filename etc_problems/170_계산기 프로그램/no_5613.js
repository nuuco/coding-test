const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [first, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let result = Number(first);
for(let i = 0; i < input.length; i++) {
  if(!/\d/.test(input[i])) {
    switch(input[i]) {
      case '+':
        result += Number(input[i + 1]);
        break;
      case '-':
        result -= Number(input[i + 1]);
        break;
      case '*':
        result *= Number(input[i + 1]);
        break;
      case '/':
        result /= Number(input[i + 1]);
        result = Math.floor(result);
        break;
      case '=':
        console.log(result);
        break;
    }
  }
}


