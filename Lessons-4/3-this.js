const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  currentYear: 2022,
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicence: true,
  calcAge: function () {
    // console.log(this);
    return this.currentYear - this.birthYear;
  },
};

console.log(jonas.calcAge());
