const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [Sstr, Tstr] = fs.readFileSync(filePath).toString().trim().split('\n');

const s = Sstr.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0);
const t = Tstr.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0);

if(s < t) {
    console.log(t);
} else if (s > t) {
    console.log(s);
} else {
    console.log(s);
}
