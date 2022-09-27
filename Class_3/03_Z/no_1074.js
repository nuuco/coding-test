const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//어렵!!!!
const [N, r, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let count = 0;
//recursive(시작 행, 시작 열, 행 개수(= 열 개수))
const recursive = (row, col, n) => {
    if(n === 1) return;
    const half = n / 2;
    //1 사분면
    if(r < row + half && c < col + half) {
        recursive(row, col, half);
    }
    //2 사분면
    else if(r < row + half && c >= col + half) {
        count += half**2;
        recursive(row, col + half, half);
    }
    //3 사분면
    else if(r >= row + half && c < col + half) {
        count += 2 * (half**2);
        recursive(row + half, col, half);
    }
    //4 사분면
    else {
        count += 3 * (half**2);
        recursive(row + half, col + half, half);
    }
}

recursive(0, 0, 2**N);

console.log(count);