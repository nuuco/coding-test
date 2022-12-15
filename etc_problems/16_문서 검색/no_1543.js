const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [text, target] = fs.readFileSync(filePath).toString().trim().split("\n");

const regex = new RegExp(target, "g");
const result = text.match(regex);
if (result === null) {
  console.log(0);
} else {
  console.log(result.length);
}

/** 다음처럼 검색할 문자열이 짧은 경우나 
 * 해당하는 문자열이 0개인 경우가 있어서 런타임 에러 발생
ex)
aba
abaa
 */
