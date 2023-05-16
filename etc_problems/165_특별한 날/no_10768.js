const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [month, date] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let result = "";
if(month < 2) {
  result = "Before";
} else if(month > 2) {
  result = "After";
}

if(month === 2) {
  if(date < 18) result = "Before";
  else if(date > 18) result = "After";
  else result = "Special";
}

console.log(result);

