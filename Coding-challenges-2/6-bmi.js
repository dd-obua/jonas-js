const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

console.log(
  `${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI (${
    mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()
  }) is higher than ${
    mark.calcBMI() < john.calcBMI() ? mark.fullName : john.fullName
  }'s (${mark.calcBMI() < john.calcBMI() ? mark.calcBMI() : john.calcBMI()})!`
);
