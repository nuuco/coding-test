const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

while(input.length > 0) {
  const arr = input.splice(0, 9);
  let y = 0;
  let k = 0;

  for(let el of arr) {
    const [a, b] = el.split(' ').map(Number);
    y += a;
    k += b;
  }

  if(y > k) {
    result.push('Yonsei');
  } else if (y < k) {
    result.push('Korea');
  } else {
    result.push('Draw');
  }
}

console.log(result.join('\n'));