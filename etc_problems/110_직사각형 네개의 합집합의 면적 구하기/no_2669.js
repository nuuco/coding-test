const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const paper = new Array(101);

for(let i = 0; i < paper.length; i++) {
    paper[i] = new Array(101).fill(false);
}

let count = 0;

for(let el of input) {
    let [x1, y1, x2, y2] = el.split(' ').map(Number); 
    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            if(!paper[i][j]){
                paper[i][j] = true;
                count++;
            }
        }
    }
}


console.log(count);