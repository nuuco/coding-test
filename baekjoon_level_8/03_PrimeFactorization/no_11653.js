const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

let newN = n;
let i = 2;
while(newN > 1) {
    if(newN % i === 0) {
        console.log(i);
        newN = parseInt(newN / i);
        i = 2;
    } else {
        i++;
    }
}
