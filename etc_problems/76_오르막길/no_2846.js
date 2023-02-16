const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, arrStr] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = arrStr.split(' ').map(Number);

arr.push(arr[arr.length - 1]);

let max = 0;
let road = [arr[0]];

for(let i = 1; i < arr.length; i++) {
    if(arr[i - 1] < arr[i]){
        road.push(arr[i]);
    } else{
        const tmp = road[road.length - 1] - road[0];
        max = max < tmp ? tmp : max;
        road = [arr[i]];
    }
}
console.log(max);

