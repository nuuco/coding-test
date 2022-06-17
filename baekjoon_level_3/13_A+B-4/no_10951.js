const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];
rl.on('line', function (line) {
    if(line === "") rl.close();
    const arr = line.split(" ");
    console.log(parseInt(arr[0]) + parseInt(arr[1]));
}).on('close', function () {
    process.exit(); //프로세스 종료
});
