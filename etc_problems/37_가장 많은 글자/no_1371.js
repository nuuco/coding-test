const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const obj = { mostCount: 0, mostWord: [] };

for (let char of input) {
  if (/\s/.test(char)) {
    continue;
  }

  if (!obj[char]) {
    obj[char] = 1;
  } else {
    obj[char]++;
  }

  if (obj.mostCount < obj[char]) {
    obj.mostCount = obj[char];
    obj.mostWord = [char];
  } else if (obj.mostCount === obj[char]) {
    obj.mostWord.push(char);
  }
}

obj.mostWord.sort();

console.log(obj.mostWord.join(""));
