const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // ! >>>>>>>>>> Code below this line

  // ! vvvvv We Stream in the file Line by Line
  for await (const line of rl) {
    // * CODE HERE
    console.log("Reading Line: ", line);
  }
}

solution();
