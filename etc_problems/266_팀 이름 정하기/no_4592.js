const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [name, t, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const countArr = [];

for (let i = 0; i < input.length; i++) {
  const nameCountArr = [];
  for (let char of "LOVE") {
    const count = (input[i] + name)
      .split("")
      .filter((el) => el === char).length;

    nameCountArr.push(count);
  }

  const [L, O, V, E] = nameCountArr;
  const answer =
    ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

  countArr.push(answer);
}
const max = Math.max(...countArr);

const tmp = [];
countArr.forEach((el, idx) => {
  if (el === max) tmp.push(input[idx]);
});

tmp.sort();
console.log(tmp[0]);
