const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = parseInt(fs.readFileSync(filePath).toString().trim());

for(let i = 1; i <= n; i++){
    console.log("*".repeat(i));
}
