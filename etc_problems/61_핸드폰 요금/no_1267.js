const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, arrStr] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = arrStr.split(' ').map(Number);

let Ysum = 0;
let Msum = 0;

for(let el of arr) {
    el++;
    Ysum += Math.ceil(el / 30) * 10;
    Msum += Math.ceil(el / 60) * 15;
    // console.log(Ysum, Msum);
}

if(Ysum < Msum) {
    console.log('Y ' + Ysum);
} else if(Ysum > Msum) {
    console.log('M ' + Msum);
} else {
    console.log('Y M ' + Ysum);
}

