const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (str) => {
  const num1 = Number(str);
  const tmp = str.split('').reverse().join('');
  const num2 = Number(tmp);
  const sum = String(num1 + num2);

  let result = 'YES';
  for(let i = 0; i < parseInt(sum.length / 2); i++) {
    if(sum[i] !== sum[sum.length - 1 - i]){
      result = 'NO';
      break;
    }
  }
  return result;
}

const result = [];
for(let el of input){
  result.push(solution(el));
}

console.log(result.join('\n'));