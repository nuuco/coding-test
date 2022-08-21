const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [n, nArr, m, mArr ] = fs.readFileSync(filePath).toString().trim().split('\n');

const nMap = new Map();
nArr = nArr.split(' ').forEach(el => {
    nMap.set(el, true);
});

const result = mArr.split(' ').map(el => {
    if(nMap.has(el)) return 1;
    return 0;
})

console.log(result.join('\n'));



