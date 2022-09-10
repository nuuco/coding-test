const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const result = [];

const solution = (queue, idx) => {
    target = queue[idx];
    queue[idx] = [queue[idx], true];
    let count = 0;

    while(true) {
        let firstVal = Array.isArray(queue[0]) ? target : queue[0];
        const goBack = [...queue, target].some(el => el > firstVal);
        if(goBack) {
            queue.push(queue[0]);
            queue.shift();
        }else {
            count++;
            if(Array.isArray(queue[0])) {
                return count;
            }
            queue.shift();
        }
    }
}


for(let i = 0; i < arr.length; i = i + 2) {
    const [n, idx] = arr[i].split(' ').map(Number);
    const queue = arr[i + 1].split(' ').map(Number);

    result.push(solution(queue, idx));
}

console.log(result.join('\n'));
