const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, aArr, bArr] = fs.readFileSync(filePath).toString().trim().split('\n');
aArr = aArr.split(' ').map(el => Number(el));
bArr = bArr.split(' ').map(el => Number(el));

const resultMap = new Map();
for(let el of aArr) {
    resultMap.set(el, true);
}

for(let el of bArr) {
    if(resultMap.has(el)) {
        resultMap.set(el, false);
    } else {
        resultMap.set(el, true);
    }
}

let cnt = 0;
for(let key of resultMap.keys()) {
    if(resultMap.get(key)) cnt++;
}
console.log(cnt);

