const fs = require("fs");
const readline = require("readline");

const inputs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

async function solution() {
  const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  let total = 0;

  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
    let allNumbers = []
      for (let i = 0; i < line.length; i++) {
          if(numbers.has(line.charAt(i))){
              allNumbers.push(line.charAt(i))
          }
      }
      total += Number(allNumbers[0] + allNumbers[allNumbers.length-1])
  }
  console.log(total)
}

solution();
