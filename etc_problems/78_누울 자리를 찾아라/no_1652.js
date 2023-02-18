const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const seat = [];
for(let el of arr){
    const tmp = el.split('');
    const row = [];
    tmp.forEach((el) => {
        if(el === '.') {
            row.push(true);
        } else {
            row.push(false);
        }
    })
    seat.push(row);
}

// console.log(seat);

let rowSeatCount = 0;
let colSeatCount = 0;

for(let i = 0; i < seat.length; i++){
    let isInclude = false;
    for(let j = 0; j < seat[i].length; j++){
        if(!seat[i][j]) isInclude = false;

        if(!isInclude && j + 1 < seat[i].length && seat[i][j] && seat[i][j + 1]){
            rowSeatCount++;
            isInclude = true;
        }
    }
}

for(let j = 0; j < seat[0].length; j++){
    let isInclude = false;
    for(let i = 0; i < seat.length; i++){
        if(!seat[i][j]) isInclude = false;

        if(!isInclude && i + 1 < seat.length && seat[i][j] && seat[i + 1][j]) {
            colSeatCount++;
            isInclude = true;
        }
    }
}

console.log(`${rowSeatCount} ${colSeatCount}`);
