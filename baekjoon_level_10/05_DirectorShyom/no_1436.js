const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

const regex = /666/;
let count = 0;
let i = 666;

while (count < n) {
    if(regex.test(String(i))) count++;
    if(count === n) console.log(i);

    i++;
}
