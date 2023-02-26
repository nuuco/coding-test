const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let target = n;
let count = 0;

arr.sort((a, b) => a - b);
while(target <= arr[arr.length - 1]){
    arr[arr.length - 1]--;
    target++
    count++;
    arr.sort((a, b) => a - b);
}
console.log(count);



