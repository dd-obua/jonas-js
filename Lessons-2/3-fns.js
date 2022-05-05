'use strict';

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age2);

// arrow functions7
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

// years left unitil retirement
const yearsUntilRetirement = (birthYear, firstName) => {
  const currentYear = 2022;
  const age = currentYear - birthYear;
  const retirementAge = 65;
  return `${firstName} retires in ${retirementAge - age} years`;
};
console.log(yearsUntilRetirement(1993, 'Denis'));
