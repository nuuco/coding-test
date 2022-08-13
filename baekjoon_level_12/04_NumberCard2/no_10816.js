const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, nArr, m, mArr] = fs.readFileSync(filePath).toString().trim().split('\n');
nArr = nArr.split(' ').map(el => Number(el));
mArr = mArr.split(' ').map(el => Number(el));

nMap = new Map();
for(let el of nArr) {
    if(nMap.has(el)) {
        const value = nMap.get(el);
        nMap.set(el, value + 1);
    }else {
        nMap.set(el, 1);
    }
}

const result = [];
for(let el of mArr) {
    if(nMap.has(el)) result.push(nMap.get(el));
    else result.push(0);
}

console.log(result.join(' '))


