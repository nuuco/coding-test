const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a, b) => b - a);

let answer = 0;
for(let i = a; i >= b; i--) {
  if(i < b + c){
    answer = i + b + c;
    break;
  }
}

console.log(answer);