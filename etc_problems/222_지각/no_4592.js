const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];

for(let el of input) {
  const max = parseInt(Math.sqrt(el));
  let answer = 0;

  for(let i = max; i >= 1; i--) {
    if(i + (i ** 2) <= el) {
      answer = i;
      break;
    }
  }
  result.push(answer);
}


console.log(result.join('\n'));
