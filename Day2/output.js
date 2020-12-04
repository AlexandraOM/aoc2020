
const fs = require("fs");

const expenses = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

const firstSol = (input) => {
    let correctNum =0;
    input.forEach((item) => {
        const [min, tail] = item.split('-')
        const [maxAndLetter, password] = tail.split(': ')
        const [max, letter] = maxAndLetter.split(' ')    
        const count = (letter, password) => {
            let num = 0
            password.split('').forEach(x => {
                if (x===letter) num++
            })
            return num
          }
        if (count(letter, password)>=min && count(letter, password)<=max) {
            correctNum++
        }
    })
    return correctNum
}
console.log(firstSol(expenses))

const secondSol = (input) => {
    let correctNum = 0;
    input.map((item) => {
        const [min, tail] = item.split('-')
        const [maxAndLetter, password] = tail.split(': ')
        const [max, letter] = maxAndLetter.split(' ')     
        const count = (letter, password) => {
            const passwordArr = password.split('')
            let occurences = 0
            if (passwordArr[min-1] === letter) {
                occurences++
            }
            if (passwordArr[max-1] === letter) {
                occurences++
            }
            return occurences
        }
        if (count(letter, password)===1) {
            correctNum++
        }
        })
    return correctNum
}
console.log(secondSol(expenses))