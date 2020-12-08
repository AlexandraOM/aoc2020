const fs = require("fs");

const {part1} = require('./output')
const instructions = fs.readFileSync(`${__dirname}/input-test.txt`).toString().split('\n');

describe('returns accumulator number', () => {
    it('part1 works', () => {
        expect(part1(instructions)).toBe(5)
    });
    it('part2 works', () => {
        expect(part2(instructions)).toBe(8)
    })
})
