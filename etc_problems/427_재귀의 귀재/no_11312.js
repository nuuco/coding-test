const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];

const recursion = (str, l, r, count) => {
  count[0]++;
  if (l >= r) return 1;
  else if (str[l] !== str[r]) return 0;
  else return recursion(str, l + 1, r - 1, count);
};

const isPalindrome = (str, count) => {
  return recursion(str, 0, str.length - 1, count);
};

for (let el of input) {
  const count = [0];
  const tmp = isPalindrome(el, count);
  result.push(tmp + " " + count[0]);
}

console.log(result.join("\n"));
