const fs = require("fs");
// const groupsAnswers = fs
//   .readFileSync(`${__dirname}/input-test.txt`)
//   .toString().split("\n\n").map(x => x.split('\n').join(''));

const aGroupYes = (groupAnswers) => {
let counts = {};
for (var i = 0; i < groupAnswers.length; i++) {
    counts[groupAnswers[i]] = 1 + (counts[groupAnswers[i]] || 0);
}
console.log(counts)
return Object.keys(counts).length
}

const part1 = (groupsAnswers) => {
    const allYesGrouped = groupsAnswers.map(group => {
        return aGroupYes(group)
    })
   return allYesGrouped.reduce((a,b) => a+b)
}
// console.log(part1(groupsAnswers))

const groupsAnswers = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString().split("\n\n")
//   .map(x => x.split('\n').join(''));

const part2 = (individualInGroupAnswers) => {
    const groups = individualInGroupAnswers.map(group => group.split('\n').join(' ').split(' '));
    let total = 0;
    
    groups.forEach(group => {
        let letterCounts = {};
        console.log(group)
        group.forEach(individual => {
            for (let i = 0; i < individual.length; i++) {
                letterCounts[individual[i]] = (letterCounts[individual[i]]+1) || 1;
            }
        })
        for (const letter in letterCounts) {
            const yeses = letterCounts[letter];
            if (yeses === group.length) total+=1
        }
    })
    return total
}
console.log(part2(groupsAnswers))
// 97 incorrect