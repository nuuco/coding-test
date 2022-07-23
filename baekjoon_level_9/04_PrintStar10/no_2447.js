const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

//배열로 풀자! 첫번째 줄이 첫번째 요소!

const printStart = (n) => {
    //base case
    if(n === 3) {
        const result = [];
        result[0] = "***";
        result[1] = "* *";
        result[2] = "***";
        return result;
    }

    const result = [];
    const sub = n / 3;
    const onePiece = printStart(sub);
    for(let i = 0; i < n; i++) {
        if(i >= sub && i < 2 * sub) {
            result[i] = onePiece[i % sub] + ' '.repeat(sub) + onePiece[i % sub];
        } else {
            result[i] = onePiece[i % sub].repeat(3);
        }
    }

    return result;

}

console.log(printStart(n).join("\n"));