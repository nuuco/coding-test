const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ');

let sum = BigInt(0);

for(let aNum of A){
    let a = Number(aNum);
    if(a === 0) continue;
    for(let bNum of B){
        let b = Number(bNum);
        if(b === 0) continue;
        sum += BigInt(a * b);
    }
}

console.log(sum.toString());
//시간 초과 남!