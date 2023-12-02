const fs = require("fs");
const readline = require("readline");

const inputs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

async function solutionTwo() {
  const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  const wordNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let total = 0;

  const fileStream = fs.createReadStream("inputTwo.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
    let cabValueFirst = null;
    let cabValueLast = null;

    let word = "";
    let index = 0;

    //Get First
    while (cabValueFirst == null) {
      if (numbers.has(line.charAt(index))) {
        cabValueFirst = line.charAt(index);
      }

      word += line.charAt(index);
      if (word.length >= 3) {
        wordNumbers.forEach((substring, index) => {
          if (word.includes(substring)) {
            cabValueFirst = String(index);
          }
        });
      }

      index++;
    }
    // console.log(cabValueFirst);

    // Reset Values
    index = line.length;
    word = "";

    // Get Last
    while (cabValueLast == null) {
      // Check if number
      if (numbers.has(line.charAt(index))) {
        cabValueLast = line.charAt(index);
      }

      word += line.charAt(index);

      // console.log(word);

      //Reverse current word and check if it is a digit
      wordNumbers.forEach((substring, index) => {
        if (word.split("").reverse().join("").includes(substring)) {
          cabValueLast = String(index);
        }
      });
      index--;
      if (index == 0) {
        cabValueLast = cabValueFirst;
      }
    }
    console.log(cabValueFirst, cabValueLast);
    total += Number(cabValueFirst + cabValueLast);
  }
  console.log("Solution Two:", total);
}

async function solutionOne() {
  const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  const wordNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let total = 0;

  const fileStream = fs.createReadStream("inputTwo.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    // console.log(`Line from file: ${line}`);
    let allNumbers = [];
    let word = "";

    for (let i = 0; i < line.length; i++) {
      word += line.charAt(i);

      if (numbers.has(line.charAt(i))) {
        allNumbers.push(line.charAt(i));
        word = "";
      }

      if (word.length >= 3) {
        wordNumbers.forEach((substring, index) => {
          if (word.includes(substring)) {
            allNumbers.push(String(index));
            i -= 1;
            word = "";
          }
        });
      }
      // console.log(word);
    }

    // console.log(allNumbers);

    if (allNumbers.length == 1) {
      // console.log(allNumbers[0]);
      total += Number(allNumbers[0] + allNumbers[0]);
    } else {
      // console.log(allNumbers[0] + allNumbers[allNumbers.length - 1]);
      total += Number(allNumbers[0] + allNumbers[allNumbers.length - 1]);
    }
  }
  console.log("Solution One:", total);
}

solutionOne();

// solutionTwo();

//56315

//56324
