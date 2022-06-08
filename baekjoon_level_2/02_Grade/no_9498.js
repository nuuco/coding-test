const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const grade = parseInt(input);

if(grade > 100 || grade < 0) console.log('invalid value');
else if(grade >= 90 ) console.log('A');
else if(grade >= 80 ) console.log('B');
else if(grade >= 70 ) console.log('C');
else if(grade >= 60 ) console.log('D');
else console.log('F');