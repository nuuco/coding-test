const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [s, k, h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

if (s + k + h >= 100) {
  console.log("OK");
} else {
  if (s < k && s < h) {
    console.log("Soongsil");
  } else if (k < s && k < h) {
    console.log("Korea");
  } else {
    console.log("Hanyang");
  }
}
