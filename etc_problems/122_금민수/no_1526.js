const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

for(let i = input; i >= 0; i--) {
    if(!/[^47]/.test(String(i))) {
        console.log(i);
        break;
    }
}
