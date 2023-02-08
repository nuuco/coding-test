const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let result = "";

for(let i = 0; i < arr[0].length; i++) {
    let char = arr[0][i];
    let isEqual = true;
    for(let j = 1; j < arr.length; j++) {
        if(arr[j][i] !== char) {
            isEqual = false;
            break;
        }
    }

    if(isEqual) {
        result += char;
    } else {
        result += '?';
    }
}

console.log(result);