const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of input) {
  const [r, e, c] = el.split(' ').map(Number);
  const adBenefit = e - c;

  if(r < adBenefit) {
    result.push('advertise');
  } else if(r === adBenefit) {
    result.push('does not matter');
  } else {
    result.push('do not advertise');
  }
}

console.log(result.join('\n'));
