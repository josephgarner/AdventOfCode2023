const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("inputTwo.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // ! >>>>>>>>>> Code below this line

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
    // [x] Get the highest value of each red, blue and green in each game
    const rounds = subsets.split(";");
    let highestCube = {
      red: 0,
      green: 0,
      blue: 0,
    };

    rounds.forEach((round, index) => {
      // console.log("Round:", index + 1);
      // [x] Get the result of each cube Split the string using ","
      const cubesDrawn = round.split(",");

      // [x] Get the result of each cube getting the number and the string
      cubesDrawn.forEach((cubes) => {
        const cube = cubes.trim().split(" ");
        // console.log(totalCubes[cube[1]], cube[1], Number(cube[0]));
        if (highestCube[cube[1]] < Number(cube[0])) {
          highestCube[cube[1]] = Number(cube[0]);
        }
      });
    });
    console.log(highestCube.blue * highestCube.red * highestCube.green);
    total += highestCube.blue * highestCube.red * highestCube.green;
  }

  console.log(total);
}

solution();
