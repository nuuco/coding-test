const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

let [n, a, b] = t.split(" ").map(Number);
a--;
b--;

const arr = new Array(n);
let isHappy = true;

for (let i = 0; i < n; i++) {
  arr[i] = input[i].split(" ").map(Number);
}

const target = arr[a][b];

for (let i = 0; i < n; i++) {
  if (i !== a) {
    if (arr[i][b] > target) {
      isHappy = false;
      break;
    }
  } else {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] > target) {
        isHappy = false;
        break;
      }
    }
  }
}

if (isHappy) {
  console.log("HAPPY");
} else {
  console.log("ANGRY");
}
