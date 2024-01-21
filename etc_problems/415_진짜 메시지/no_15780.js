const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];

for (let el of input) {
  //el = 문장 하나
  let isOk = true;
  const checked = [];

  for (let i = 0; i < el.length; i++) {
    const char = el[i]; //문자 하나
    if (checked.indexOf(char) === -1) {
      checked.push(char);
      let count = 0;
      for (let j = i; j < el.length; j++) {
        if (el[j] === char) {
          //해당 문자 일치 체크
          count++;
        }

        if (count !== 0 && count % 3 === 0) {
          if (el[j + 1] !== char) {
            isOk = false;
            break;
          } else {
            j++;
            count = 0;
          }
        }
      }
      if (!isOk) {
        break;
      }
    }
  }

  if (isOk) {
    result.push("OK");
  } else {
    result.push("FAKE");
  }
}
console.log(result.join("\n"));
