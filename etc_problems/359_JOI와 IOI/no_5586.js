const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const joiCount = input.match(/JOI/g) ? input.match(/JOI/g).length : 0;
const ioiCount = input.match(/IOI/g) ? input.match(/IOI/g).length : 0;
const ioioiCount = input.match(/IOIOI/g) ? input.match(/IOIOI/g).length : 0;

console.log(joiCount + "\n" + (ioiCount + ioioiCount));
