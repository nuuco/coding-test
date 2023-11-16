const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, a, b] = fs.readFileSync(filePath).toString().trim().split("\n");

const boxes = a.split(" ").map(Number);
const books = b.split(" ").map(Number);

let waste = 0;
let bookIdx = 0;
let isAllBooksInBox = false;

for (let el of boxes) {
  let leftover = el;

  if (isAllBooksInBox) {
    waste += leftover;
    continue;
  }

  for (let i = bookIdx; i < books.length; i++) {
    if (books[i] <= leftover) {
      leftover -= books[i];
      bookIdx = i + 1;
      if (i === books.length - 1) {
        waste += leftover;
        isAllBooksInBox = true;
      }
      if (leftover === 0) {
        break;
      }
      continue;
    } else {
      waste += leftover;
      bookIdx = i;
      break;
    }
  }
}

console.log(waste);
