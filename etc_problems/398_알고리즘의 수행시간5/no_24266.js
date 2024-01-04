const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = BigInt(fs.readFileSync(filePath).toString().trim());

const result = n ** BigInt(3);
console.log(result.toString());
console.log(3);
