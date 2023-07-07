const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [s, t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

input.push(s);

let answer = Number.MAX_SAFE_INTEGER;

for(let el of input) {
  const [m, g] = el.split(' ').map(Number);
  const tmp  = (1000 * m) / g;

  if(tmp < answer) {
    answer = tmp;
  }
}

console.log(answer.toFixed(2));

