const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split(' ').map(Number);
}

let max = -1;
const point = [0, 0];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > max) {
            max = arr[i][j];
            point[0] = i + 1;
            point[1] = j + 1;
        }
    }
}

console.log(max);
console.log(point.join(' '));