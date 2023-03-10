const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [len, koreanTotal, mathTotal, koreanMax, mathMax] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const mathTime = Math.ceil(mathTotal / mathMax);
const koranTime = Math.ceil(koreanTotal / koreanMax);

const rest = len - Math.max(mathTime, koranTime);

console.log(rest);
