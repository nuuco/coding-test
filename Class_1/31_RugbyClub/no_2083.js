const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of input) {
  if(el === '# 0 0') {
    break;
  }

  let [name, age, weight] = el.split(' ');
  age = Number(age);
  weight = Number(weight);

  let memberClass = "Junior";

  if(age > 17 || weight >= 80) {
    memberClass = "Senior";
  }

  result.push(`${name} ${memberClass}`);
}

console.log(result.join('\n'));