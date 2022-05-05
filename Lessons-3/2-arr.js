// Exercise
const calcAge = (birthYear) => {
  return 2022 - birthYear;
};

const years = [1990, 1991, 1992, 1993];
console.log(years);
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[0]);
const age3 = calcAge(years[0]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
