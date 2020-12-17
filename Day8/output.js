const fs = require("fs");

const instructions = fs.readFileSync(`${__dirname}/input.txt`).toString().split('\n');

const part1 = (instructions) => {
    let indexRecord = []
    let currentI =0;
    let acc = 0;
    while (currentI<instructions.length) {
        if (indexRecord.includes(currentI)) {
            return {acc, currentI};
        }
        indexRecord.push(currentI);

        if (instructions[currentI].includes('nop')) {
            currentI +=1
        } else if (instructions[currentI].includes('acc')) {
            const num = parseInt(instructions[currentI].split('acc ')[1])
            acc+=num
            currentI +=1
        } else if (instructions[currentI].includes('jmp')) {
            const num = parseInt(instructions[currentI].split('jmp ')[1])
            currentI +=num
        }
        
    }
    // console.log({acc, currentI})
    return {acc, currentI};
}
// console.log(part1(instructions))

/** 
After some careful analysis, you believe that exactly one instruction is corrupted.
Somewhere in the program, either a jmp is supposed to be a nop, or a nop is supposed to be a jmp. (
No acc instructions were harmed in the corruption of this boot code.)
The program is supposed to terminate by attempting to execute an instruction immediately after the last instruction in the file. 
By changing exactly one jmp or nop, you can repair the boot code and make it terminate correctly.
For example, consider the same program from above:

nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6

If you change the first instruction from nop +0 to jmp +0, it would create a single-instruction infinite loop, never leaving that instruction. 
If you change almost any of the jmp instructions, the program will still eventually find another jmp instruction and loop forever.
However, if you change the second-to-last instruction (from jmp -4 to nop -4), the program terminates! 
The instructions are visited in this order:

nop +0  | 1
acc +1  | 2
jmp +4  | 3
acc +3  |
jmp -3  |
acc -99 |
acc +1  | 4
nop -4  | 5
acc +6  | 6

After the last instruction (acc +6), the program terminates by attempting to run the instruction below the last instruction in the file. 
With this change, after the program terminates, the accumulator contains the value 8 (acc +1, acc +1, acc +6).
Fix the program so that it terminates normally by changing exactly one jmp (to nop) or nop (to jmp). 
What is the value of the accumulator after the program terminates?

**/

const part2 = (instructions) => {
    let index =0;
    while (index < instructions.length) {
        if (instructions[index].includes('acc')) {
            index+=1
            continue
        };

        const editedArray =  instructions.map((instruction, i) => {
            if (i===index) {
                if (instruction.includes('nop')) {
                    return instruction.replace('nop', 'jmp');
                }
                if (instruction.includes('jmp')) {
                    return instruction.replace('jmp', 'nop');
                }
            }
            return instruction;
        });
        
        const result = part1(editedArray);
        if (result.currentI >= instructions.length) return result.acc;
        index++
    }
}
console.log(part2(instructions))
module.exports = {part1, part2}