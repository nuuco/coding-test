const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = t.split(' ').map(el => Number(el));

const matrix_1 = arr.slice(0, n).map(el => el.split(' ').map(num => Number(num)));
const matrix_2 = arr.slice(n).map(el => el.split(' ').map(num => Number(num)));

const resultMatrix = [];

for(let i = 0; i < n; i++) {
    resultMatrix[i] = [];
    for(let j = 0; j < m; j++) {
        resultMatrix[i][j] = matrix_1[i][j] + matrix_2[i][j];
    }
}

const resultPrint = [];
for(let el of resultMatrix) {
    resultPrint.push(el.join(' '));
}

console.log(resultPrint.join('\n'));
