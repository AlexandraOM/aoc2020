const fs = require("fs");
const passportList = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString().split("\n\n").map(x => x.split('\n').join(' '));

const credentialsToCheck = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const part1 = (passportList) => {
    let valids = 0;
  passportList.forEach(passport => {
    const numberOfCreds = passport.split(' ').length;
    if (numberOfCreds >6 && credentialsToCheck.every(cred => passport.includes(cred))) {
      valids+=1;
    }
  })
  return valids
}

console.log(part1(passportList))

const eyeColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
const validateEcl = (ecl) => eyeColours.filter(col => col === ecl).length === 1
const validateByr = (byr) => byr.length === 4 && parseInt(byr) >1919 && parseInt(byr) <2003 
const validateIyr = (iyr) => iyr.length === 4 && parseInt(iyr) >2009 && parseInt(iyr) <2021 
const validateEyr = (eyr) => eyr.length === 4 && parseInt(eyr) >2019 && parseInt(eyr) <2031 
const validateHcl = (hcl) => !!hcl.match(`^#[0-9a-f]{6}`)
const validatePid = (pid) => !!parseInt(pid) && pid.length === 9
const validateCm = (number) => number>149 && number <194
const validateInches = (number) => number>58 && number <77
const validateHgt = (hgt) => {
  if (!!hgt.match(`^[0-9]+?(cm|in)$`)) {
    const [_, height, cmOrInches ]= hgt.match(`([0-9]+)?(cm|in)`)
    return cmOrInches === 'in' ? validateInches(parseInt(height)) : validateCm(parseInt(height))
  }
  return false
}


const checkCredentials = (passportCredentialsList) => {
  return passportCredentialsList.split(' ').map(credAndItem => {
    const [cred, item] = credAndItem.split(':')
    switch(cred) {
      case 'byr':
        return validateByr(item)
      case 'iyr':
        return validateIyr(item)
      case 'eyr':
        return validateEyr(item)
      case 'hgt':
        return validateHgt(item)
      case 'hcl':
        return validateHcl(item)
      case 'ecl':
        return validateEcl(item)
      case 'pid':
        return validatePid(item)
      case 'cid': 
        return true
      default:
        console.log('something is wrong')
    }
  }).every(item => item === true) 
}

const part2 = (passportList) => {
  let valids = 0;
    passportList.forEach(passport => {
      const numberOfCreds = passport.split(' ').length
      if (numberOfCreds > 6 && credentialsToCheck.every(cred => passport.includes(cred))) {
        if (checkCredentials(passport)) valids++ 
      }
    })
  return valids
}
console.log(part2(passportList))

module.exports= {part1, part2, validateByr, validateIyr, validateEyr, validateHgt, validateHcl, validateEcl, validatePid}