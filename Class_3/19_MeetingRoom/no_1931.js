const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split(' ').map(Number);
}

//그리디... BaakingDog - 그리디 강의 참고
//시작하는 시간이 t이상인 것 들 중 가장 빨리 끝나는 것을 선택

//일단은 끝나는 시간이 빠른 순서대로 오름차순 정렬하기
//여기서 주의할 점! 끝나는 시간이 같다면 시작하는 시간이 빠른 순으로 정렬해야한다.
//왜냐?? 시작하자마자 끝나는 회의의 존재 때문! [1, 2] [2, 2] 회의가 있다면 두 회의다 진행 가능!
arr.sort((a, b) => {
  if(a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

// console.log(arr);

let endTime = 0;
let count = 0;

for(let el of arr) {
  if(el[0] >= endTime) { //시작 시간이 앞 회의 끝나는 시간 이상이라면
    count++; //회의 추가하고
    endTime = el[1]; //회의 끝나는 시간 갱신
  }
}

console.log(count);

