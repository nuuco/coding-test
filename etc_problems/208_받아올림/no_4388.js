const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const result = [];

for(let el of input) {
  const [a, b] = el.split(' ');
  let answer = 0;
  let prev = false;
  const maxLen = a.length < b.length ? b.length : a.length;

  for(let i = 1; i <= maxLen; i++) {
    let targetA = Number(a[a.length - i] || 0);
    let targetB = Number(b[b.length - i] || 0);

    if(prev) targetA++;

    if(targetA + targetB >= 10) {
      answer++;
      prev = true;
    }
  }
  result.push(answer);
}

console.log(result.join('\n'));