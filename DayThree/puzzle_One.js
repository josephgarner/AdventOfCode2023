const fs = require("fs");
const readline = require("readline");

function isASymbol(character){
  if(!(character >= '0' && character <= '9') && character !== '.'){
    return true
  }
  return false
}

function checkSurrounding(data, rowL, colL, row, col){
  const sRow = row === 0 ? row : row - 1
  const eRow = row === rowL - 1 ? row : row + 1

  const sCol = col === 0 ? col : col - 1
  const eCol = col === colL - 1 ? col : col + 1

  for (let r = sRow; r <= eRow; r++){
    for (let c = sCol; c <= eCol; c++){
      // console.log("Looking at row", r, "and", c, "which is ", data[r][c])
      if(isASymbol(data[r][c])){
        return true
      }
    }
  }
  return false
}

async function solution() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // ! >>>>>>>>>> Code below this line

  // [x] create a 2D array to store all values
  const data = []
  let total = 0

  // ! vvvvv We Stream in the file Line by Line
  for await (const line of rl) {
    // * CODE HERE
    data.push(line.split(""))
    // [x] store all characters into a the 2D array
  }

  // DO THIS PER LINE/NUMBER
  // [x]  Find the first number
  // [x]  search the surrounding values for a symbol if a symbol is found mark the isValid as true
  // [x]  repeat until all numbers in a row are contaminated
  // [x]  If isValid is true then add to the total
  // [x]  Repeat

  for (let row = 0; row < data.length; row++){
    let isValid = false
    let number = ""
    for (let col = 0; col < data[row].length; col++){
      if(data[row][col] >= '0' && data[row][col] <= '9'){
        // console.log(data[row][col], "is valid = ", checkSurrounding(data,data.length, data[row].length, row, col))
        number += data[row][col]
        if(checkSurrounding(data,data.length, data[row].length, row, col)){
          isValid = true
        }
      }
      else if(!(data[row][col] >= '0' && data[row][col] <= '9') || col === data[row].length - 1){
        if(number !== ""){
          console.log(number, isValid)
          if(isValid){
            total += Number(number)
          }
          number = ""
          isValid = false
        }
      }
    }
  }
  console.log(total)
}

solution();
