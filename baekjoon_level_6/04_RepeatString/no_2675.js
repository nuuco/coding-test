const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let str of input) {
    let [r, s] = str.split(' ');
    r = Number(r);
    let result = ''
    for(let char of s) {
        result += char.repeat(r);
    }
    console.log(result);
}


