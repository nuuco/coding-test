const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

/*
1. 산술평균 : N개의 수들의 합을 N으로 나눈 값
2. 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
3. 최빈값 : N개의 수들 중 가장 많이 나타나는 값
4. 범위 : N개의 수들 중 최댓값과 최솟값의 차이
*/

//1. 산술평균
const sum = arr.reduce((acc, cur) => acc + cur);
const arithmeticMean = Math.round(sum / arr.length);
console.log(arithmeticMean === -0 ? 0 : arithmeticMean);

//2. 중앙값
arr.sort((a, b) => a - b);
const midIdx = Math.floor(arr.length / 2);
console.log(arr[midIdx]);

//3. 최빈값
const obj = {};
let max = 0;
for(let el of arr) {
    if(obj[el] === undefined) {
        obj[el] = 1;
    } else {
        obj[el]++;
    }
    if(max < obj[el]) max = obj[el];
}

const mode = [];
for(let num in obj) {
    if(obj[num] === max) {
        mode.push(num);
    }
}
if(mode.length === 1) console.log(mode[0]);
else {
    mode.sort((a, b) => a - b);
    console.log(mode[1]);
}

//4. 범위
console.log(arr[arr.length - 1] - arr[0]);
