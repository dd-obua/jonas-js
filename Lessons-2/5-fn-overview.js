// years till retirement
const calcAge = function (birthYear) {
  const currentYear = 2022;
  return currentYear - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementAge = 65;
  const remainingYears = retirementAge - age;
  // return remainingYears > 0 ? remainingY ears : -1;
  if (remainingYears > 0) {
    console.log(`${firstName} retires in ${remainingYears} years`);
    return remainingYears;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
  return remainingYears;
};

console.log(yearsUntilRetirement(1993, 'Denis'));
console.log(yearsUntilRetirement(1963, 'Richard'));
console.log(yearsUntilRetirement(1940, 'John'));
