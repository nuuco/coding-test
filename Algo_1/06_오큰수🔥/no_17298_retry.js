const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [t, nums] = fs.readFileSync(filePath).toString().trim().split('\n');
t = Number(t);
nums = nums.split(' ').map(Number);

//어렵!!
//참고 블로그: https://junghyeonsu.tistory.com/218
//스택을 사용한다.
//스택에는 오큰수를 찾지 못한 인덱스를 저장한다.
//스택의 마지막 인덱스의 숫자와 현재 숫자를 해당 수의 오큰수로 저장. 스택은 pop

const stack = [];

for(let i = 0; i < t; i++) {
  while(stack.length && nums[stack[stack.length - 1]] < nums[i]) {
    nums[stack.pop()] = nums[i];
  }
  stack.push(i);
}

while(stack.length) {
  nums[stack.pop()] = -1;
}

console.log(nums.join(' '));


