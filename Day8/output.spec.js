const fs = require("fs");

const {part1, part2} = require('./output')
const instructions = fs.readFileSync(`${__dirname}/input-test.txt`).toString().split('\n');

describe('returns accumulator number', () => {
    it('part1 works', () => {
        const expected = {acc: 5, currentI:1}
        expect(part1(instructions)).toEqual(expected)
    });
    it('part1 works for flipped data', () => {
        const instructionsFlipped = ['nop +0',
        'acc +1',
        'jmp +4',
        'acc +3',
        'jmp -3',
        'acc -99',
        'acc +1',
        'nop -4',
        'acc +6']
        expect(part1(instructionsFlipped)).toEqual({acc: 8, currentI:9})
    })
    it('part2 works', () => {
        expect(part2(instructions)).toBe(8)
    })
})
