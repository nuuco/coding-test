const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const company = {};

for(let el of arr){
    const [name, act] = el.split(' ');
    if(act === 'enter') {
        company[name] = true;
    }else {
        delete company[name];
    }
}

const list = Object.keys(company).sort().reverse();

console.log(list.join('\n'));