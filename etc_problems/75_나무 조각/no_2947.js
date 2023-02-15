const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const getIsOrdered = (arr) => {
    let isOrdered = arr.every((el, idx)=> {
        if(el !== idx + 1) {
            return false;
        } else return true
    })

    return isOrdered;
}
const result = [];

while(!getIsOrdered(input)) {
    for(let i = 0; i < input.length - 1; i++){
        if(input[i] > input[i + 1]) {
            result.push(input.join(' '));
            [input[i], input[i+1]] = [input[i+1], input[i]]; 
        }
    }
}
result.shift();
result.push(input.join(' '));
console.log(result.join('\n'));
