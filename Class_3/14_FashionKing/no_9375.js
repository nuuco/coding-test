const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = [];

while(arr.length > 0) {
  const num = Number(arr.shift());
  const tc = arr.splice(0, num);
  testCase.push(tc);
}

const getClothObj = (arr) => {
  const clothing = {};
  arr.forEach(el => {
    const [item, key] = el.split(' ');
    if(clothing[key]) {
      clothing[key]++;
    } else {
      clothing[key] = 1;
    }
  })

  return clothing;
}

const result = [];
for(let el of testCase) {
  const values = Object.values(getClothObj(el));
  const answer = values.reduce((acc, cur) => acc * (cur + 1),1) - 1; 
  result.push(answer);
}

console.log(result.join('\n'));
/**
 * 3종류의 의상이 각각 1, 2, 3 개 있다고 해보자!
 * 여기서 1개라도 입을 경우의 수는?
 * (모두 일어날 경우의 수) - (절대 일어나면 안되는 경우의 수)
 * (각 개수 + 1)을 모두 곱한 것에 1을 빼준 값이다.
 * 첫번째 종류 중에서 안 입거나 1개중 하나를 고를수 있는 경우의 수 = 1 + 1(안입) = 2
 * 두번째 종류 중에서 안 입거나 2개중 하나를 고를수 있는 경우의 수 = 2 + 1(안입) = 3
 * 세번째 종류 중에서 안 입거나 3개중 하나를 고를수 있는 경우의 수 = 3 + 1(안입)) = 4
 * 각 경우의 수를 곱하면 2 * 3 * 4 = 24
 * 그 중 하나도 안 걸칠 경우의 수는 1이다. 
 * 즉 24 - 1 해주면 답은 23
 */