const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input) {
  const charArr = el.split('');
  const alphabet = {};
  for(let char of charArr) {
    const tmp = char.toUpperCase();
    if(/[a-zA-Z]/.test(tmp)) {
      if(!alphabet[tmp]) {
        alphabet[tmp] = true;
      }
    }
  }
  result.push(Object.keys(alphabet).length);
}

console.log(result.join('\n'));
