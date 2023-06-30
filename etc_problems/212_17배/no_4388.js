const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const mul16 = input + '0000';
const result = [];

let prev = false;
for(let i = 1; i <= mul16.length; i++) {
  const inputTarget = input.length - i >= 0 ? Number(input[input.length - i]) : 0;
  let tmp = Number(mul16[mul16.length - i]) + inputTarget;
  if(prev) tmp++;

  if(tmp >= 2) prev = true;
  else prev = false;

  tmp = tmp % 2;
  result.push(tmp);
}

if(prev) result.push(1);

console.log(result.reverse().join(''));

