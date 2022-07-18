//fs 모듈로 풀기
//에라토스테네스의 체 로 풀기 -> 시간복잡도 O(NloglogN)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

const n = 2 * Math.max(...arr);  //max 값, 246912 이하

const primeArr = [];
for(let i = 0; i <= n; i++) {
    if(i < 2) primeArr[i] = false;
    primeArr[i] = true;
}
//const primeArr = Array(n + 1).fill(true);

for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(primeArr[i]) {
        let j = 2;
        while(i * j <= n) {
            primeArr[i * j] = false;
            j++;
        }
    }
}

for(let num of arr) {
    if(num !== 0) {
        let result = primeArr.slice(num + 1, 2 * num + 1).filter(el => el).length;
        console.log(result);
    }
}



//fs 모듈 - 일반 풀이
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
// const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

// const result = [];
// for(let n of arr) {
//     let cnt = 0;
//     for(let i = n + 1; i <= 2 * n; i++) {
//         let isPrime = true;
//         for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
//             if(i % j === 0) isPrime = false;
//         }
//         if(isPrime && i !== 1) {
//             cnt++;
//         }
//     }
//     if(n !== 0) result.push(cnt);
// }

// console.log(result.join('\n'));

//readline 으로 풀기
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let data = [];
// rl.on('line', function (line) {
//     n = Number(line.trim());
//     let cnt = 0;
//     for(let i = n + 1; i <= 2 * n; i++) {
//         let isPrime = true;
//         for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
//             if(i % j === 0) isPrime = false;
//         }
//         if(isPrime && i !== 1) {
//             cnt++;
//         }
//     }
//     if(n !== 0) data.push(cnt);
//     else rl.close();
// }).on('close', function () {
//     console.log(data.join('\n'));
//     process.exit(); //프로세스 종료
// });

