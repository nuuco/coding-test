const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

//배열로 풀자!
const printStart = (n) => {
    if(n === 3) {
        const result = [];
        result[0] = "  *  ";
        result[1] = " * * ";
        result[2] = "*****";
        return result;
    }

    const result = [];
    const sub = n / 2;
    const onePiece = printStart(sub);
    const space = ' '.repeat(Math.ceil(onePiece[onePiece.length - 1].length / 2));

    for(let i = 0; i < n; i++) {
        if(i < sub) {
            result[i] = space + onePiece[i] + space;
        } else {
            result[i] = onePiece[i % sub] + ' ' + onePiece[i % sub];
        }
    }

    return result;
}

console.log(printStart(n).join("\n"));