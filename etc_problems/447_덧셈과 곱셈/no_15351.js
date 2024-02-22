const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let next = BigInt(0);
let prev = BigInt(0);
let result = BigInt(1);

for (let i = 1; i < a; i++) {
  prev += BigInt(i);
}

for (let i = a; i <= b; i++) {
  next = prev + BigInt(i);
  result *= next;
  result %= BigInt(14579);
  prev = next;
}

console.log(result.toString());
