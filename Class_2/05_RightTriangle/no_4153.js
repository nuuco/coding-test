const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < arr.length - 1; i++) {
    const triangle = arr[i].split(' ').map(el => Number(el));
    triangle.sort((a, b) => b - a);
    const isRight = triangle[1]**2 + triangle[2]**2 === triangle[0]**2;
    if(isRight) result.push("right");
    else result.push("wrong");
}

console.log(result.join('\n'));
