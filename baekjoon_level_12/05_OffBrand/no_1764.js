const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [nAndM, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = nAndM.split(' ').map(el => Number(el));
const nArr = arr.slice(0, n);
const mArr = arr.slice(n);

const nMap = new Map();
for(let el of nArr) {
    nMap.set(el, true);
}

const result = [];
for(let el of mArr) {
    if(nMap.has(el)) result.push(el);
}
result.sort();
console.log(result.length);
console.log(result.join('\n'));


