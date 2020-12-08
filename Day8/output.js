const fs = require("fs");

const instructions = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

const part1 = (instructions) => {
    let indexRecord = []
    let currentI =0;
    let acc = 0;
    while (currentI<instructions.length+1) {
        if (indexRecord.includes(currentI)) {
            return acc;
        }
        indexRecord.push(currentI);

        if (instructions[currentI].includes('nop')) {
            currentI +=1
            continue
        };
        if (instructions[currentI].includes('acc')) {
            const num = parseInt(instructions[currentI].split('acc ')[1])
            acc+=num
            currentI +=1
            continue
        };
        if (instructions[currentI].includes('jmp')) {
            const num = parseInt(instructions[currentI].split('jmp ')[1])
            currentI +=num
            continue
        }
        
    }
    return acc;
}
console.log(part1(instructions))

const part2 = (instructions) => {
    let indexRecord = []
    let currentI =0;
    let acc = 0;
    while (currentI<instructions.length+1) {
        if (indexRecord.includes(currentI)) {
            if (instructions[currentI].includes('jmp -')) {
                if (indexRecord.includes('nop')) return acc;
                indexRecord.push('nop')
            } 
            indexRecord.push(currentI);
            continue
        }
       

        if (instructions[currentI].includes('nop')) {
            currentI +=1
            continue
        };
        if (instructions[currentI].includes('acc')) {
            const num = parseInt(instructions[currentI].split('acc ')[1])
            acc+=num
            currentI +=1
            continue
        };
        
        if (instructions[currentI].includes('jmp')) {
            const num = parseInt(instructions[currentI].split('jmp ')[1])
            currentI +=num
            continue
        }
        
    }
    return acc;
}
console.log(part2(instructions))
module.exports = {part1}