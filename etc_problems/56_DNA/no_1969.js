const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = t.split(" ").map(Number);

const result = new Array(m);
for (let i = 0; i < m; i++) {
  //DNA 길이
  charMemo = { maxNum: 0, maxChar: null };

  for (let j = 0; j < n; j++) {
    //DNA 개수
    const char = arr[j][i];
    if (!charMemo[char]) {
      charMemo[char] = 1;
    } else {
      charMemo[char]++;
    }

    if (charMemo[char] > charMemo["maxNum"]) {
      charMemo["maxNum"] = charMemo[char];
    }
  }

  for (let key in charMemo) {
    if (key === "maxNum" || key === "maxChar") continue;

    if (
      charMemo[key] === charMemo["maxNum"] &&
      (!charMemo["maxChar"] || key < charMemo["maxChar"])
    ) {
      charMemo["maxChar"] = key;
    }
  }
  result[i] = charMemo;
}

let count = 0;
let dna = "";

for (let memo of result) {
  dna += memo["maxChar"];
  count += n - memo["maxNum"];
}

const answer = `${dna}\n${count}`;
console.log(answer);
