const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = t.split(" ").map(Number);

const brandSetList = [];
const brandEachList = [];

for (let el of input) {
  const [set, each] = el.split(" ").map(Number);
  brandSetList.push(set);
  brandEachList.push(each);
}
brandEachList.forEach((el) => {
  brandSetList.push(el * 6);
});

brandSetList.sort((a, b) => a - b);
brandEachList.sort((a, b) => a - b);

const six = Math.floor(n / 6);
const left = n % 6;

let cost = 0;

cost += brandSetList[0] * six;
let tmp = brandEachList[0] * left;
if (brandSetList[0] < tmp) {
  cost += brandSetList[0];
} else {
  cost += tmp;
}

console.log(cost);
