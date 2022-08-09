const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const newArr = [...new Set(arr)];

newArr.sort((a, b) => {
    if(a.length === b.length) return a <= b ? -1 : 1;
    return a.length - b.length;
});

let result = "";
for(let el of newArr) {
    result += el + '\n';
}
console.log(result);


