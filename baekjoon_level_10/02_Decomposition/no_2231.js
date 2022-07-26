const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const sum = Number(input);

// 각 자리 최대 수는 9이므로 생성자는 (원래 값 - 자리수 * 9) 부터 시작하면 된다. 
let minCreator = sum - (9 * input.length);
let result = 0;

for(let i = minCreator; i < sum; i++) {
    //각 자리 수를 배열로 만든다. ex) 213 -> [2, 1, 3]
    const numArr =  String(i).split("").map(el => Number(el));
    const tmp = i + numArr.reduce((acc, cur) => acc + cur);
    if(sum === tmp) {
        result = i;
        break;
    }
}

console.log(result);


