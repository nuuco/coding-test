const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [0, 0, 0, 0, 0];  //AXIS, Q1, Q2, Q3, Q4

for(let el of input) {
  const [x, y] = el.split(' ').map(Number);

  if(x === 0 || y === 0) {
    result[0]++;
    continue;
  }

  if(x > 0) {
    if(y > 0) result[1]++;
    else result[4]++;
    continue;
  }

  if(x < 0) {
    if(y > 0) result[2]++;
    else result[3]++;
  }
}

const resultStr =  `Q1: ${result[1]}
Q2: ${result[2]}
Q3: ${result[3]}
Q4: ${result[4]}
AXIS: ${result[0]}`;

console.log(resultStr);
