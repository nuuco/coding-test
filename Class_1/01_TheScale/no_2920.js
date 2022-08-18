const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

let isAscend = true;
let isDescend = true;
for(let i = 1; i < arr.length; i++) {
    if(arr[i - 1] < arr[i]) {
        isDescend = false;
    } else if(arr[i - 1] > arr[i]) {
        isAscend = false;
    }
}

let result = "";
if(isAscend) result = "ascending";
else if(isDescend) result = "descending";
else result = "mixed";

console.log(result);
