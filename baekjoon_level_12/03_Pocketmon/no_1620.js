const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [nAndM, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = nAndM.split(' ').map(el => Number(el));

const dogam = new Map();
for(let i = 1; i <= n; i++) {
    dogam.set(arr[i - 1], i);
}

const monArr = [...dogam.keys()];
const result = [];
for(let i = n; i < arr.length; i++) {
    const target = dogam.get(arr[i]);
    if(target !== undefined) result.push(target);
    else result.push(monArr[Number(arr[i]) - 1]);
}

console.log(result.join('\n'));
