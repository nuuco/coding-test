const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, chicken] = fs.readFileSync(filePath).toString().trim().split("\n");

const twoChicken = chicken * 2;
const money = t
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

if (money >= twoChicken) {
  console.log(money - twoChicken);
} else {
  console.log(money);
}
