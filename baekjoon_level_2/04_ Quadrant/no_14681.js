const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 *  2 | 1
 * -------
 *  3 | 4
 */
const x = parseInt(input[0]);
const y = parseInt(input[1]);
let result = 0;

if(x > 0){
    if(y > 0) result = 1;
    else result = 4;
} else {
    if(y > 0) result = 2;
    else result = 3;
}
console.log(result);


/**
 * fs 모듈로 풀 시, 런타임 에러 발생
 * readline 으로 풀기
 */

/*
const readline = require("readline");

const rl = readline.createInterface ( {
    input:process.stdin,
    output:process.stdout,
});

let input =[];
let count = 0;

rl.on("line", function(x) {
    count++;
    input.push(parseInt(x));
    if (count ==2) {
        rl.close();
    }
}).on("close", function() {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    let result = 0;

    if(x > 0){
        if(y > 0) result = 1;
        else result = 4;
    } else {
        if(y > 0) result = 2;
        else result = 3;
    }
    console.log(result);
});

*/