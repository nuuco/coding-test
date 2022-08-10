const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, nArr, m, mArr] = fs.readFileSync(filePath).toString().trim().split('\n');

nArr = nArr.split(' ').map(el => Number(el));
nMap = new Map();
for(let el of nArr) {
    nMap.set(el, 1);
}
mArr = mArr.split(' ').map(el => Number(el));

for(let i = 0; i < mArr.length; i++) {
    mArr[i] = nMap.get(mArr[i]) === 1 ? 1 : 0;
}

console.log(mArr.join(' '));
