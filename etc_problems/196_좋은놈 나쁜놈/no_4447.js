const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  let answer = el + ' is ';
  const name = el.split('').map(char => char.toLowerCase());

  const gCnt = name.filter(char => char === "g").length;
  const bCnt = name.filter(char => char === "b").length;

  if(gCnt > bCnt) {
    answer += "GOOD";
  } else if(gCnt < bCnt) {
    answer += "A BADDY";
  } else {
    answer += "NEUTRAL";
  }
  result.push(answer);
}

console.log(result.join('\n'));

