const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const aConNum = [0, 1, 3, 6, 10, 15, 21];
const aConReward = [5000000, 3000000, 2000000, 500000, 300000, 100000, 0];
const bConNum = [0, 1, 3, 7, 15, 31];
const bConReward = [5120000, 2560000, 1280000, 640000, 320000, 0];

const result = [];

for(let el of input) {
  let aReward = 0;
  let bReward = 0;
  const [a, b] = el.split(' ').map(Number);

  for(let i = 0; i < aConNum.length - 1; i++) {
    if(a > aConNum[i] && a <= aConNum[i + 1]) {
      aReward = aConReward[i];
      break;
    }
  }

  for(let i = 0; i < bConNum.length - 1; i++) {
    if(b > bConNum[i] && b <= bConNum[i + 1]) {
      bReward = bConReward[i];
      break;
    }
  }

  result.push(aReward + bReward);
}

console.log(result.join('\n'));

