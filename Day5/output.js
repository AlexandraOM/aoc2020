const fs = require("fs");
const ticketList = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString().split("\n");

const findSeatNumber = (str) => {
    const stringFB = str.slice(0, 7)
    const stringRL = str.slice(7, 10)
    
    const binaryFB = stringFB.split('').map(letter => {
        if (letter === 'F') return 0
        if (letter === 'B') return 1
    });

    const binaryRL = stringRL.split('').map(letter => {
        if (letter === 'L') return 0
        if (letter === 'R') return 1
    });
    // this is a reused solution from a bit converter challenge I did 
    // (I had made it so it could be reused for different bits)
    // this probably still could be neatened up, but it works using the built in methods so i'm leaving it at that
    const row = parseInt(binaryFB.join(''), 2).toString(10).split('').map(x => parseInt(x, 10)).join('')
    const column = parseInt(binaryRL.join(''), 2).toString(10).split('').map(x => parseInt(x, 10)).join('')
    const ID = (parseInt(row)*8)+parseInt(column)
    return ID
}
const part1 = (listOfTickets) => {
    const numbers = listOfTickets.map(ticket => {
        return findSeatNumber(ticket)
    });
   return Math.max(...numbers)
}

const part2 = (listOfTickets) => {
    const orderedNumbers = listOfTickets.map(ticket => {
        return findSeatNumber(ticket)
    }).sort((a,b) => a-b);
    const numbersEitherSide = orderedNumbers.filter((num, index) => {
        return orderedNumbers[index-1] !== num-1 || orderedNumbers[index+1] !== num+1
    })
    // numbers either side will return 4 numbers: 
    // the first in the array of ordered numbers,
    // one below the missing ticket
    // one above the missing ticket
    // and the last number in the array of ordered numbers
    return numbersEitherSide[1]+1
}

console.log('result', part1(ticketList))
console.log('result2', part2(ticketList))
module.exports = {findSeatNumber, part1}