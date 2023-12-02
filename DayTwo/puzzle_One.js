const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // ! >>>>>>>>>> Code below this line

  // [x] set game params with enum
  const totalCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  let total = 0;

  let gameCount = 0;
  for await (const line of rl) {
    // [x] Get game Number
    gameCount++;
    console.log("Game:", gameCount);
    let isPossible = true;

    // [x] Split the string using ":"
    // const sanitised = line.replace(" ", "");
    const subsets = line.split(":")[1];

    // [x] Get Results from each round in the game Split the string using ";"
    const rounds = subsets.split(";");

    rounds.forEach((round, index) => {
      // console.log("Round:", index + 1);
      // [x] Get the result of each cube Split the string using ","
      const cubesDrawn = round.split(",");

      // [x] Get the result of each cube getting the number and the string
      cubesDrawn.forEach((cubes) => {
        const cube = cubes.trim().split(" ");
        // console.log(totalCubes[cube[1]], cube[1], Number(cube[0]));
        if (totalCubes[cube[1]] < Number(cube[0])) {
          isPossible = false;
        }
      });
    });
    if (isPossible) {
      console.log("Game ", gameCount, "Is possbile");
      total += gameCount;
    }
  }

  console.log(total);
}

solution();
