const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');


/**
 * 1. [0 ~ 99] 배열이 100개 있는 이중 배열을 만든다. 이 때 각 값은 0으로 초기화
 * 2. (x, y) ~ (x2, y2) 좌표 (각 -1 한 값이어야 함) 에 해당하는 idx를 찾아서 그 값을 +1 시킨다.
 * 3. m 이상인 칸의 수를 세서 출력한다.
 */

const [t, ...papers] = input;
const [n, m] = t.split(' ').map(Number);

const picture = Array(100);

for(let i = 0; i < picture.length; i++) {
    picture[i] = Array(100).fill(0);
}

for(let el of papers) {
    let [x1, y1, x2, y2] = el.split(' ').map(el => Number(el) - 1);
    if(x1 > x2) {
        const tmp = x1;
        x1 = x2;
        x2 = tmp;
    }
    if(y1 > y2) {
        const tmp = y1;
        y1 = y2;
        y2 = tmp;
    }

    for(let i = x1; i <= x2; i++) {
        for(let j = y1; j <= y2; j++) {
            picture[i][j]++;
        }
    }
}

let result = 0;

for(let i = 0; i < 100; i++){
    result += picture[i].filter((el => el > m)).length;
}

console.log(result);