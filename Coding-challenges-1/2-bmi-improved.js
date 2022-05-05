const marksMass = 95;
const johnsMass = 85;
const marksHeight = 1.88;
const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHeight ** 2;
console.log(marksBMI, johnsBMI);
if (marksBMI > johnsBMI) {
  console.log(`Marks's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's  (${marksBMI})!`);
}
