const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let hour = parseInt(input[0].split(' ')[0]);
let minute = parseInt(input[0].split(' ')[1]);
let ovenTime = parseInt(input[1]); 

//1. 만약 minute + ovenTime 이 60 이상이면 
//      parseInt((minute + ovenTime)/60) 시간만큼 hour 에 추가하고
//      (minute + ovenTime)%60가 minute이 된다.
//2. 만약 minute + ovenTime 이 60 이상이 아니라면 minute 에 ovenTime 을 더해준다.
//3. 위 계산 후, hour >= 24 라면 (hour - 24) 를 hour에 저장한다.
//4. "${hour} ${minute}" 을 출력한다.

if(minute + ovenTime >= 60) {
    hour += parseInt((minute + ovenTime)/60);
    minute = (minute + ovenTime)%60;
} else {
    minute += ovenTime;
}
if(hour >= 24) hour -= 24;

console.log(`${hour} ${minute}`);
