const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const result = [];

for(let char of input) {
  //A ~ Z -> 65 ~ 90
  let num = char.charCodeAt() - 3; 
  if(num < 65) { 
    num += 26;
  }
  result.push(String.fromCharCode(num));
}

console.log(result.join(''));