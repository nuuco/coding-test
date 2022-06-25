const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [textNum, ...testCase] = input;

for(let i = 0; i < parseInt(textNum); i++) {
    let [n, ...arr] = testCase[i].split(' ');
    n = parseInt(n);
    arr = arr.map(el => parseInt(el));
    const avg = arr.reduce((acc, cur) => acc + cur, 0) / n;
    const percent = (arr.filter(el => el > avg).length / n * 100).toFixed(3) + '%';
    console.log(percent);
}

