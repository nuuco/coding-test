const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [d, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const getDayOfWeek = (num) => {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
    default:
      return;
  }
};

console.log(getDayOfWeek(new Date(`2009-${m}-${d}`).getDay()));
