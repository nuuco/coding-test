const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = t.split(' ').map(Number);
let count = 0;

/**
 * 1. 일단 2차원 배열로 만들어서
 * 2. 둘 다 없는 곳에 X를 넣고 나서
 * 3. 행에 없는 곳 체크
 * 4. 열에 없는 곳 체크
 */
const castle = [];
for(let el of arr) {
    castle.push(el.split(''));
}

//1. 행 열 둘다 없는 곳에 X 추가
for(let i = 0; i < castle.length; i++) {
    if(!castle[i].includes('X')) {
        for(let j = 0; j < castle[0].length; j++) {
            if(castle.every(el => el[j] !== 'X')) {
                castle[i][j] = 'X';
                count++;
                break;
            }
        }
    }
}

//2. 그 뒤 행에 없으면 추가
for(let i = 0; i < castle.length; i++) {
    if(!castle[i].includes('X')) {
        castle[i][0] = 'X';
        count++;
    }
}

//3. 열에 없으면 추가
for(let j = 0; j < castle[0].length; j++) {
    if(castle.every(el => el[j] !== 'X')) {
        castle[0][j] = 'X';
        count++;
    }
}

console.log(count);