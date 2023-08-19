const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
let [r, c] = t.split(' ').map(Number);
let error = input.pop().split(' ').map(el => Number(el) - 1);
const result = [];

for(let i = 0; i < r; i++) {
  const tmp = input[i].split('').reverse().join('');
  result.push(input[i] + tmp);
}

for(let i = 0; i < r; i++) {
  const tmp = result[r - 1 - i];
  result.push(tmp);
}
const toBe = result[error[0]][error[1]] === '#' ? '.' : '#';
result[error[0]] = result[error[0]].split('').map((el, idx) => idx === error[1] ? toBe : el).join('');

console.log(result.join('\n'));
