const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const a = "ABC".repeat(Math.ceil(input.length / 3));
const b = "BABC".repeat(Math.ceil(input.length / 4));
const c = "CCAABB".repeat(Math.ceil(input.length / 6));

let max = -1;
let result = ["Adrian"];

let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === a[i]) {
    count++;
  }
}
max = count;

count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === b[i]) {
    count++;
  }
}

if (max < count) {
  max = count;
  result = ["Bruno"];
} else if (max === count) {
  result.push("Bruno");
}

count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === c[i]) {
    count++;
  }
}

if (max < count) {
  max = count;
  result = ["Goran"];
} else if (max === count) {
  result.push("Goran");
}

console.log(max);
console.log(result.join("\n"));
