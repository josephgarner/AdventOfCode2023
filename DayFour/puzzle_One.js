const fs = require("fs");
const readline = require("readline");

async function solution() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // ! >>>>>>>>>> Code below this line

  let total = 0

  // ! vvvvv We Stream in the file Line by Line
  for await (const line of rl) {
    // * CODE HERE
    let points = 0;
    const game = line.split(":")[1].split("|")
    const results = game[0].trim().split(" ").filter(e => e !== '')
    const required = game[1].trim().split(" ")
    const winning = new Set([])

    results.forEach(num => {
      // console.log(num)
      if(required.includes(num)){
        winning.add(num)
      }
    })
    // console.log(winning)
    if(winning.size > 0){
      points += 1
      for (let i = 1; i < winning.size; i++){
        points = points * 2
      }
    }

    console.log(points)


    total += points
  }

  console.log(total)
}

solution();


// too high 36099