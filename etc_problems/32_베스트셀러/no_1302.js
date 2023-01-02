const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const bookList = {};

let max = 0;
let bestseller = null;
arr.forEach((el) => {
  if (!bookList[el]) {
    bookList[el] = 1;
  } else {
    bookList[el]++;
  }

  if (max < bookList[el]) {
    max = bookList[el];
    bestseller = el;
  } else if (max === bookList[el]) {
    bestseller = bestseller < el ? bestseller : el;
  }
});

console.log(bestseller);
