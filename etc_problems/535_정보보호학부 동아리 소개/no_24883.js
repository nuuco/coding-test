const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const obj = {
  M: "MatKor",
  W: "WiCys",
  C: "CyKor",
  A: "AlKor",
  $: "$clear",
};

console.log(obj[input]);
