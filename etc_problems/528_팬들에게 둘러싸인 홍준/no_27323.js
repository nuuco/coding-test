const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const answer = `:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`;

console.log(answer);
