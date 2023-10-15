const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [k, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
for (let i = 0; i < input.length; i++) {
  const [hp, mp, p, s, hpAdd, mpAdd, pAdd, sAdd] = input[i].split(" ").map(Number);

  const newHp = hp + hpAdd < 1 ? 1 : hp + hpAdd;
  const newMp = mp + mpAdd < 1 ? 1 : mp + mpAdd;
  const newP = p + pAdd < 0 ? 0 : p + pAdd;
  const newS = s + sAdd;

  const power = newHp + 5 * newMp + 2 * newP + 2 * newS;

  result.push(power);
}

console.log(result.join("\n"));
