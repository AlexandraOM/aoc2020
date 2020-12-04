const fs = require("fs");

const passportList = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString().split("\n\n");

  const credentialsToCheck = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
  ]
  const part1 = (passportList) => {
      let valids = 0;
    passportList.forEach(x => {
        const passportCreds = x.split('\n').join(' ')
        const numberOfCreds = passportCreds.length
        if (numberOfCreds < 7) {
            return
        }
        if (credentialsToCheck.every(cred => !passportCreds.includes(cred))) {
          return
        }
        valids+=1
    })
    return valids
  }

  console.log(part1(passportList))
  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  const validateByr = (byr) => {
    return byr.length === 4 && parseInt(byr) >1919 && parseInt(byr) <2003
  }
  
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  const validateIyr = (iyr) => {
    return iyr.length === 4 && parseInt(iyr) >2009 && parseInt(iyr) <2021
  
  }
  
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  const validateEyr = (eyr) => {
    return eyr.length === 4 && parseInt(eyr) >2019 && parseInt(eyr) <2031
  }
  
  
  // If cm, the number must be at least 150 and at most 193.
  const validateCm = (cm) => {
    const number = parseInt(cm);
    return number>149 && number <194
  }
  
  // If in, the number must be at least 59 and at most 76.
  const validateInches = (inches) => {
    const number = parseInt(inches);
    return number>58 && number <77
  }
  // hgt (Height) - a number followed by either cm or in:
  const validateHgt = (hgt) => {
    
    if (!!hgt.match(`^[0-9]+?(cm|in)$`)) {
      const [_, height, cmOrInches ]= hgt.match(`([0-9]+)?(cm|in)`)
      return cmOrInches === 'in' ? validateInches(height) : validateCm(height)
    }
    return false
  }
  // validateHgt(`123in`)
  
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  const validateHcl = (hcl) => {
    const regex = `^#[0-9a-f]{6}`
    return !!hcl.match(regex)
  }
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  const validateEcl = (ecl) => {
    const eyes = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    const isValid = eyes.filter(eye => eye === ecl)
    return isValid.length === 1
  }

  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  const validatePid = (pid) => {
    return !!parseInt(pid) && pid.length === 9
  }

const checkCredentials = (passportCredentialsList) => {
  return passportCredentialsList.map(credAndItem => {
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
// passport list '....
// ...'
  const part2 = (passportList) => {
    let valids = 0;
    passportList.forEach(x => {
      const passport = x.split('\n').join(' ');
      const passportCreds = passport.split(' ');
      const numberOfCreds = passportCreds.length;
      if (numberOfCreds < 7) {
          return
      }
      if (credentialsToCheck.every(cred => !passport.includes(cred))) {
        return
      }  
      if (checkCredentials(passportCreds)) valids++ 
    })
  return valids
}
console.log(part2(passportList))
// 160 too high
// 153 too high
// 138 correct
// 71 incorrect
module.exports= {part1, part2, validateByr, validateIyr, validateEyr, validateHgt, validateHcl, validateEcl, validatePid}