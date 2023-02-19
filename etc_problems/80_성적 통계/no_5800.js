const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arrStr] = fs.readFileSync(filePath).toString().trim().split('\n');

const classes = [];

for(let el of arrStr){
    const [num, ...tmp] = el.split(' ').map(Number);
    tmp.sort((a, b) => b - a);
    classes.push(tmp);
}

const result = [];
for(let i = 0; i < classes.length; i++){
    result.push(`Class ${i + 1}`);
    const tmp = classes[i];
    const max = tmp[0];
    const min = tmp[tmp.length - 1];
    let gap = 0;
    for(let j = 0; j < tmp.length - 1; j++){
        const tmpGap = tmp[j] - tmp[j + 1];
        if(gap < tmpGap){
            gap = tmpGap;
        }
    }
    
    const str = `Max ${max}, Min ${min}, Largest gap ${gap}`;
    result.push(str);
}

console.log(result.join('\n'));


// Class 1
// Max 78, Min 23, Largest gap 46
// Class 2
// Max 99, Min 25, Largest gap 25