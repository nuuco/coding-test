const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(el => parseInt(el));

//나머지 종류를 저장하는 빈 객체
const count = {}
//for 문 돌면서 키값 저장
for(let el of arr){
    let rest = el % 42;
    if(count[rest] === undefined) count[rest] = true;
}

console.log(Object.keys(count).length);
