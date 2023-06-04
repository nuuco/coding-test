const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const arr = el.split(' ').map(Number).sort((a, b) => b - a);
  const obj = {maxCount: 0, maxNum: 0};

  for(let el of arr) {
    if(!obj[el]) obj[el] = 1;
    else obj[el]++;

    if(obj.maxCount < obj[el]) {
      obj.maxCount = obj[el];
      obj.maxNum = el;
    }
  }
  // console.log(obj)

  let answer = 0;
  switch(obj.maxCount) {
    case 4:
      answer = 50000 + (obj.maxNum * 5000);
      break;
    case 3:
      answer = 10000 +(obj.maxNum * 1000);
      break;
    case 2:
      const pair = Object.entries(obj).filter(el => {
        return el[1] === 2 && el[0] !== 'maxCount' && el[0] !== 'maxNum';
      });
      //1쌍이 일치  1,1,2,3
      if(pair.length === 1) {
        answer = 1000 + (obj.maxNum * 100);
      } else {
        //2쌍이 일치  1,1,2,2
        answer = 2000 + (Number(pair[0][0]) * 500) + (Number(pair[1][0]) * 500);
      }
      break;
    case 1:
      answer = arr[0] * 100;
      break;
  }

  result.push(answer);
}

// console.log(result);
result.sort((a, b) => b - a);

console.log(result[0]);