const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number).sort((a, b) => b - a);

const sum = a + b + c;
let result = "";

if(a === 60 && b === 60 && c === 60) result = "Equilateral";
else if(sum === 180) {
  if(a === b || b === c) result = "Isosceles";
  else result = "Scalene";
} else {
  result = "Error";
}

console.log(result);