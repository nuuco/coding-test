const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = parseInt(fs.readFileSync(filePath).toString().trim());

for(let i = n - 1; i >= 0; i--){
    console.log(" ".repeat(i) + "*".repeat(n - i));
}
