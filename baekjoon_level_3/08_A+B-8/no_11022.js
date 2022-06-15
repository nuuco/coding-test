const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < n; i++){
    const [n1, n2] = arr[i].split(" ");
    console.log(`Case #${i + 1}: ${parseInt(n1)} + ${parseInt(n2)} = ${parseInt(n1) + parseInt(n2)}`);
}