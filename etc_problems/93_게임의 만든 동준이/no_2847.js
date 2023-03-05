const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = (arr) => {
    let count = 0;

    let i = 0;
    while(i < arr.length - 1){
        if(arr[i] < arr[i + 1]){
            i++;
        } else {
            arr[i]--;
            count++;
            i = 0;
        }
    }

    return count;
}

console.log(solution(arr));