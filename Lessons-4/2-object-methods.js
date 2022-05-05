const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicence: true,
  calcAge: (birthYear) => 2022 - birthYear,
};

console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas['calcAge'](jonas.birthYear));
console.log(jonas['calcAge'](jonas['birthYear']));
