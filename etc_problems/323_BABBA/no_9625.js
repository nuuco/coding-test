const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

let a = [1, 0];
let b = [0, 1];
let aNum = 0;
let bNum = 0;
for (i = 2; i <= n; i++) {
  aNum = a[i - 1] + a[i - 2];
  a.push(aNum);
  bNum = b[i - 1] + b[i - 2];
  b.push(bNum);
}

console.log(`${a[n]} ${b[n]}`);
