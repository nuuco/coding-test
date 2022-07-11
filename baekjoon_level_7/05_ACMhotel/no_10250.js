const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//H : 호텔 층수, W : 층당 호텔 수, N : 손님 수
for(let test of arr) {
    const [H, W, N] = test.split(' ').map(el => Number(el));
    const tmpY = N % H;
    const Y = tmpY === 0 ? H : tmpY;  //N이 H의 배수 일 경우, 0층이 아니라 H 층이니까.
    const tmpX = Math.ceil(N / H);
    const X =  tmpX < 10 ? '0' + tmpX : tmpX;
    console.log(`${Y}${X}`);
}
