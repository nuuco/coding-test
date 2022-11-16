const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [x, y] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const date = new Date(2007, x - 1, y);

switch(date.getDay()) {
  case 0: 
    console.log('SUN');
    break;
  case 1: 
    console.log('MON');
    break;
  case 2: 
    console.log('TUE');
    break;
  case 3: 
    console.log('WED');
    break;
  case 4: 
    console.log('THU');
    break;
  case 5: 
    console.log('FRI');
    break;
  case 6: 
    console.log('SAT');
    break;
}


