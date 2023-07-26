const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const [n, m] = el.split(' ').map(Number);
  const oneLeg = 2 * m - n;
  const twoLeg = m - oneLeg;
  result.push(`${oneLeg} ${twoLeg}`);
}
console.log(result.join('\n'));