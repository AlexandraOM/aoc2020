const fs = require("fs");

const treeMap = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n");

const northToSouth = treeMap.length;
const westToEast = treeMap[0].length;

const part1 = (across, map) => {
    let indexWestToEast = 0
    let trees = 0;
    let spaces = 0;
    map.forEach((line) => {
        line[indexWestToEast] === '#' ? trees++ : spaces++;
        indexWestToEast = (indexWestToEast+across)%westToEast
    })
    return trees
}
console.log(part1(3, treeMap))

// Right 1, down 1. 104
// Right 3, down 1. 230
// Right 5, down 1. 83
// Right 7, down 1. 98
// Right 1, down 2. 49
// too low      42296800
// too low      9442028540 
// incorrect    9542155590 
// correct      9533698720
// too high     9728264000

// part2

const part2 = (down, across, map) => {
    
    let trees=0;
    let spaces=0;
    let y=0;
    let x=0;

    while (y<northToSouth) {
        map[y][x] === '#' ? trees+=1 : spaces+=1
        x = (x+across)%westToEast
        y+=down;
    }
    return trees
}

const yx = [[1,1],[1,3],[1,5],[1,7],[2,1]]

const totals = yx.map(params => {
    return part2(params[0], params[1], treeMap)
})
console.log(totals.reduce((a,b) => a*b))
