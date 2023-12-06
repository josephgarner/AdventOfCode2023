const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("inputTwo.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // ! >>>>>>>>>> Code below this line
  const winningCards = {};

  // ! vvvvv We Stream in the file Line by Line
  let currentIndex = 1;
  for await (const line of rl) {
    // * CODE HERE
    if (winningCards[currentIndex]) {
      winningCards[currentIndex] += 1;
    } else {
      winningCards[currentIndex] = 1;
    }

    let points = 0;
    const game = line.split(":")[1].split("|");
    const results = game[0]
      .trim()
      .split(" ")
      .filter((e) => e !== "");
    const required = game[1].trim().split(" ");
    let winning = new Set([]);
      results.forEach((num) => {
        if (required.includes(num)) {
          winning.add(num);
        }
      });

    console.log("Instances: ", winningCards[currentIndex])
    console.log("Winning Set for index ", currentIndex, winning)

    for (let i = 1; i <= winningCards[currentIndex]; i++) {
      for (let i = 1; i <= winning.size; i++) {
        if (winningCards[currentIndex + i]) {
          winningCards[currentIndex + i] += 1;
        } else {
          winningCards[currentIndex + i] = 1;
        }
      }
    }

    // console.log("Repeat Cards", winningCards)

    
    console.log()
    currentIndex++;
  }

  console.log(winningCards);
  let total = 0
  Object.keys(winningCards).forEach(key => total += winningCards[key])

  console.log(total);
}

solution();

// too high 36099
