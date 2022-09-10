const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//이분 탐색!!!!
let [t, arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = t.split(' ').map(Number);
arr = arr.split(' ').map(Number).sort((a, b) => b - a);

const getWood = (h, arr) => {
    return arr.reduce((acc, cur) => {
        const rest = cur - h;
        if(rest > 0) return acc + rest;
        return acc; 
    }, 0)
}


let left = 0;
let right = arr[0];
let middle = Math.floor((left + right) / 2);
let max = 0;

while(left <= right) {
    const result = getWood(middle, arr);
   

    if(result === m) {
        max = middle;
        break;
    }

    if(result < m ) {
        right = middle - 1; 
    } else {
        left = middle + 1;
        max = max < middle ? middle : max;
        
    }
    middle = Math.floor((left + right) / 2);
}
console.log(max);




