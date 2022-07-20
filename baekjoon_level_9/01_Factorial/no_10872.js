const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

if(n === 0) console.log(1);
else {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}



