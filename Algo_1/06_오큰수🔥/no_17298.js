const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, nums] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = nums.split(' ').map(Number);

const result = new Array(arr.length).fill(-1);

for(let i = 0; i < arr.length - 1; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if(arr[i] < arr[j]) {
      result[i] = arr[j];
      break;
    }
  }
}

console.log(result.join(' '));

//시간 초과
