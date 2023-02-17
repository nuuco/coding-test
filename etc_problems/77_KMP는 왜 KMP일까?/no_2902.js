const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split('-');
let short = "";
for(let name of arr){
    short += name[0];
}

console.log(short);