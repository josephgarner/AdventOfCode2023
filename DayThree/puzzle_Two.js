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
      if(data[r][c] === '*'){
        return "" + r + c
      }
    }
  }
  return "0"
}

async function solution() {
  const fileStream = fs.createReadStream("inputTwo.txt");

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

  const pairs = {}
  let currentGear = null
  let newGear = null
  let isValid

  for (let row = 0; row < data.length; row++){
    let number = ""
    for (let col = 0; col < data[row].length; col++){
      if(data[row][col] >= '0' && data[row][col] <= '9'){
        number += data[row][col]
        newGear = checkSurrounding(data,data.length, data[row].length, row, col)
        if(newGear !== "0"){
          if(!pairs[newGear]){
            pairs[newGear] = {first: null, second: null}
            isValid = true
          }
          currentGear = newGear
          isValid = true
          
        }
      }
      if(!(data[row][col] >= '0' && data[row][col] <= '9') || col === data[row].length - 1){
        if(pairs[currentGear] && isValid === true){
          if(pairs[currentGear].first === null){
            pairs[currentGear].first = Number(number)
          } else if (pairs[currentGear].second === null){
            pairs[currentGear].second = Number(number)
          }
        }
        number = ""
        isValid = false
      }
    }
    console.log(pairs)
  }

  // total += pairs.filter(pair => pair.second !== null).forEach(pair => pair.first * pair.second);
  const filteredKeys = Object.keys(pairs).filter(keys => pairs[keys].second !== null)

  filteredKeys.forEach(key => { total += pairs[key].first * pairs[key].second})

  console.log(total)
}

solution();
