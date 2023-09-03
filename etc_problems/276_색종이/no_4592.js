const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const paper = new Array(1001).fill([]);
for (let i = 0; i < paper.length; i++) {
  paper[i] = new Array(1001).fill(0);
}

for (let i = 1; i <= input.length; i++) {
  let [xTarget, yTarget, wTarget, hTarget] = input[i - 1]
    .split(" ")
    .map(Number);

  for (let x = xTarget; x < xTarget + wTarget; x++) {
    for (let y = yTarget; y < yTarget + hTarget; y++) {
      paper[x][y] = i;
    }
  }
}

let count = 0;
const result = {};
for (let x = 0; x < paper.length; x++) {
  for (let y = 0; y < paper[0].length; y++) {
    const num = paper[x][y];
    if (num === 0) continue;
    else if (!result[num]) {
      result[num] = 1;
    } else {
      result[num]++;
    }
  }
}

for (let i = 1; i <= input.length; i++) {
  if (result[i]) console.log(result[i]);
  else console.log(0);
}
