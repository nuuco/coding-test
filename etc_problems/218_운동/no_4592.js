const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [N, m, M, T, R] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let pulse = m;
let work = 0;
let time = 0;

while(work < N) {
  if(m + T > M) {
    time = -1;
    break;
  }

  if(pulse + T <= M) {
    work++;
    time++;
    pulse += T;
  } else {
    time++;
    if(pulse - R <= m) {
      pulse = m;
    } else {
      pulse -= R;
    }
  }
}

console.log(time);