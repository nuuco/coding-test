const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let el of arr){
    const numArr = el.split(' ');
    console.log(parseInt(numArr[0]) + parseInt(numArr[1]));
}