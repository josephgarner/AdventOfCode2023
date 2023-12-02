const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("inputTwo.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
  }
}

solution();
