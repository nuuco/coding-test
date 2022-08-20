const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < arr.length - 1; i++) {
    let isPalin = true;
    let leftIdx = 0;
    let rightIdx = arr[i].length - 1;
    while(leftIdx < rightIdx) {
        if(arr[i][leftIdx] !== arr[i][rightIdx]) {
            isPalin = false;
            break;
        }
        leftIdx++;
        rightIdx--;
    }

    if(isPalin) result.push("yes");
    else result.push("no");
}

console.log(result.join('\n'));