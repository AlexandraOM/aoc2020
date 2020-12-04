const fs = require("fs");
const {part1, part2, validateByr, validateIyr, validateEyr, validateHgt, validateHcl, validateEcl, validatePid} = require('./output')
const passportList = fs
  .readFileSync(`${__dirname}/test-input.txt`)
  .toString()

// const passportList = fs.readFileSync("input.txt").toString().split("\n\n");

describe('', () =>{
    it.skip('has fewer than seven credits', () => {
        testInput.toString().split('\n\n')
        const result = part1(passportList)
        
        expect(result).toBe(8)
    })

it('valid byr:', () =>   {
    expect(validateByr('2002')).toBe(true)})
it('invalid byr:', () => {
    expect(validateByr('2003')).toBe(false)})

it('valid eyr:', () =>   {
        expect(validateEyr('2020')).toBe(true)})
it('valid eyr:', () =>   {
    expect(validateEyr('2030')).toBe(true)})
it('invalid eyr:', () => {
    expect(validateEyr('2019')).toBe(false)
})
it('invalid eyr:', () =>   {
    expect(validateEyr('2031')).toBe(false)
})

it('valid hgt:', () =>   {
    expect(validateHgt('60in')).toBe(true)})
it('valid hgt:', () =>   {
    expect(validateHgt('190cm')).toBe(true)})
it('invalid hgt:', () => {
    expect(validateHgt('190in')).toBe(false)})
it('invalid hgt:', () => {
    expect(validateHgt('190')).toBe(false)})

it('valid hcl:', () =>   {
    expect(validateHcl('#123abc')).toBe(true)
})
it('invalid hcl:', () => {
    expect(validateHcl('#123abz')).toBe(false)})
it('invalid hcl:', () => {
    expect(validateHcl('123abc')).toBe(false)
})

it('valid ecl:', () =>   {
    expect(validateEcl('brn')).toBe(true)})
it('invalid ecl:', () => {
    expect(validateEcl('wat')).toBe(false)})

it('valid pid:', () =>   {
    expect(validatePid('000000001')).toBe(true)})
it('invalid pid:', () => {
    expect(validatePid('0123456789')).toBe(false)})

it('part2, finds four correct passports and four incorrect', () => {
    expect(part2(passportList)).toBe(4)
})
})