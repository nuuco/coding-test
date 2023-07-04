const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let i = 0; i < input.length; i += 2) {
  const [n, k] = input[i].split(' ').map(Number);
  const candies = input[i + 1].split(' ').map(Number);

  const answer = candies.reduce((acc, cur) => acc + (Math.floor(cur / k)), 0);

  result.push(answer);
}

console.log(result.join('\n'));