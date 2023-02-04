const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
    const [t, ...arr] = input;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ');
        arr[i][1] = Number(arr[i][1]);
        arr[i][2] = Number(arr[i][2]);
        arr[i][3] = Number(arr[i][3]);
    }
    
    if(arr.length <= 1) return arr[0][0];

    //arr[i] : 0 - 이름, 1 - 일, 2 - 월, 3 - 년
    arr.sort((a, b) => {
        if(a[3] !== b[3]) {
            return a[3] - b[3];
        } else if(a[2] !== b[2]) {
            return a[2] - b[2];
        } else {
            return a[1] - b[1];
        }
    })
    
    return `${arr[arr.length - 1][0]}\n${arr[0][0]}`;
}

console.log(solution(input));