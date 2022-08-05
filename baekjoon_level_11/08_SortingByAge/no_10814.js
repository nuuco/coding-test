const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < arr.length; i++) {
    const tmp = arr[i].split(' ');
    arr[i] = [Number(tmp[0]), tmp[1]];
}

arr.sort((a, b) => {
    return a[0] - b[0];
})

let result = "";
for(let el of arr) {
    result += el.join(' ') + '\n';
}

console.log(result);