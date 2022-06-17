const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let el of input){
    if(el === "0 0") break;
    const [a, b] = el.split(" ");
    console.log(parseInt(a) + parseInt(b));
}