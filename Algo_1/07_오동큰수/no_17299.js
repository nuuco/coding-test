const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [t, nums] = fs.readFileSync(filePath).toString().trim().split('\n');
t = Number(t);
nums = nums.split(' ').map(Number);

//참고 블로그: https://junghyeonsu.tistory.com/218

//각 숫자 횟수 세기
const counts = {};
for(let el of nums) {
  if(counts[el] !== undefined) {
    counts[el] = counts[el] + 1;
  } else {
    counts[el] = 1;
  }
}

const stack = [];

for(let i = 0; i < t; i++) {
  while(stack.length && counts[nums[stack[stack.length - 1]]] < counts[nums[i]]) {
    nums[stack.pop()] = nums[i];
  }
  stack.push(i);
}

while(stack.length > 0) {
  nums[stack.pop()] = -1;
}

console.log(nums.join(' '));
