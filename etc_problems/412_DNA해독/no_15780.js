const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(t);
const dic = {
  AA: "A",
  AG: "C",
  AC: "A",
  AT: "G",
  GA: "C",
  GG: "G",
  GC: "T",
  GT: "A",
  CA: "A",
  CG: "T",
  CC: "C",
  CT: "G",
  TA: "G",
  TG: "A",
  TC: "G",
  TT: "T",
};

let result = input[n - 1];

for (let i = n - 1; i >= 1; i--) {
  result = dic[input[i - 1] + result];
}

console.log(result);
