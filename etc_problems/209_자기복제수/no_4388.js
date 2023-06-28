const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];

for(let el of input) {
  const sqr = String(el ** 2);
  const strEl = String(el);

  let answer = "YES";

  for(let i = 1; i <= strEl.length; i++) {
    const target = strEl[strEl.length - i];
    if(sqr[sqr.length - i] !== target) {
      answer = "NO";
      break;
    } 
  }
  result.push(answer);
}


console.log(result.join('\n'));