const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

//"pi", "ka", "chu"
let i = 0;
let result = "NO";
while(true) {
    if(input.slice(i, i + 2) === "pi" || input.slice(i, i + 2) === "ka") {
        i += 2;
    } else if(input.slice(i, i + 3) === "chu") {
        i += 3;
    } else {
        break;
    }

    if(i >= input.length) result = "YES";
}

console.log(result);