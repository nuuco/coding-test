const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, ...tmp] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = tmp.map(el => el.split(' ').map(n => Number(n)));

arr.sort((a, b) => {
    if(a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
})

let result = "";

for(let el of arr) {
    result += el.join(' ') + '\n';
}
console.log(result);