const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//세 수의 곱
const multNum = input.map(el => parseInt(el)).reduce((acc, cur) => acc * cur);

//각 숫자의 개수를 저장할 객체 만들기
const numCountObj = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
};

//for 문 돌려서 각 숫자 카운드
for(let char of String(multNum)){
    numCountObj[char] += 1;
}

//Object.values(obj) = 객체의 모든 값 배열로 반환
console.log(Object.values(numCountObj).join('\n'));