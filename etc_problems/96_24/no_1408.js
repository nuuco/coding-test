const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [current, start] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (current, start) => {
    const [startH, startM, startS] = start.split(':').map(Number);
    const [curH, curM, curS] = current.split(':').map(Number);
    
    let restH = startH - curH;
    let restM = startM - curM;
    let restS = startS - curS;
    
    if(restS < 0) {
        restM--;
        restS += 60;
    }
    if(restM < 0) {
        restH--;
        restM += 60;
    }
    if(restH < 0) {
        restH += 24;
    }
    
    const result = `${restH < 10 ? '0' + restH : restH}:${restM < 10 ? '0' + restM : restM}:${restS < 10 ? '0' + restS : restS}`
    
    return result;
}

console.log(solution(current, start))
