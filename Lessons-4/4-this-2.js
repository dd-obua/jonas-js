const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  currentYear: 2022,
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicence: true,
  calcAge: function () {
    this.age = this.currentYear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${
      this.hasDriversLicence === true ? 'a' : 'no'
    } driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
