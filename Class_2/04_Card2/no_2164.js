const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

const card = (n) => {
    if (n === 1) return 1;
    let arr = Array(n);
    for(let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }

    let toggle = true;
    let count = 0;
    let i = 0;

    while(count !== n - 1) {
        if(toggle) {
            arr[i] = 0;
            count++;
        }
        toggle = !toggle;
        i++;
        if(i === arr.length) {
            i = 0;
            arr = arr.filter(el => el !== 0);
        }
    }

    return arr.filter(el => el !== 0)[0];
}

console.log(card(n));
