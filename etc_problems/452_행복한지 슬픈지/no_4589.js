const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const happy = input.match(/:-\)/g) ? input.match(/:-\)/g).length : 0;
const sad = input.match(/:-\(/g) ? input.match(/:-\(/g).length : 0;

if (happy === 0 && sad === 0) {
  console.log("none");
} else if (happy === sad) {
  console.log("unsure");
} else if (happy > sad) {
  console.log("happy");
} else {
  console.log("sad");
}
