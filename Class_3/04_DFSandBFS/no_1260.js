const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m, v] = t.split(' ').map(Number);

const matrix = new Array(n + 1);
for(let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n + 1).fill(0);
}

for(let el of arr) {
    const [i, j] = el.split(' ').map(Number);
    matrix[i][j] = 1;
    matrix[j][i] = 1;
}

const dfs = (v, matrix) => {
    const needVisit = [v];
    const visited = [];

    while(needVisit.length > 0) {
        const vertex = needVisit.shift();
        if(!visited.includes(vertex)) {
            visited.push(vertex);
        }
        for(let i = matrix[vertex].length - 1; i > 0; i--) {
            if(matrix[vertex][i] === 1 && !visited.includes(i)) {
                needVisit.unshift(i);
            }
        }
    }

    return visited;
}


const bfs = (v, matrix) => {
    const needVisit = [v];
    const visited = [];

    while(needVisit.length > 0) {
        const vertex = needVisit.shift();
        if(!visited.includes(vertex)) {
            visited.push(vertex);
        }
        for(let i = 0; i < matrix[vertex].length; i++) {
            if(matrix[vertex][i] === 1 && !visited.includes(i)) {
                needVisit.push(i);
            }
        }
    }
    return visited;
}

console.log(dfs(v, matrix).join(' '));
console.log(bfs(v, matrix).join(' '));
