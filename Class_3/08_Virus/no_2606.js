const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, c, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const metrix = [];
for(let i = 0; i <= Number(n); i++) {
    metrix[i] = Array(Number(n) + 1).fill(0);
}

for(let el of arr) {
    const [i, j] = el.split(' ').map(Number);
    metrix[i][j] = 1;
    metrix[j][i] = 1;
}

const needVisit = [1];
const visited = [];

while(needVisit.length > 0) {
    const cur = needVisit.shift();
    if(visited.includes(cur)) {
        continue;
    }

    visited.push(cur);
    for(let i = 1; i < metrix[cur].length; i++) {
        if(metrix[cur][i] === 1) {
            needVisit.push(i);
        }
    }
}

console.log(visited.length - 1);

