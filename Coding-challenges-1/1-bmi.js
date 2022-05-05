const marksMass = 95;
const johnsMass = 85;
const marksHeight = 1.88;
const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI;
if (marksBMI > johnsBMI) {
  markHigherBMI = true;
} else {
  markHigherBMI = false;
}

console.log("Mark's BMI:", marksBMI);
console.log("John's BMI:", johnsBMI);
console.log(markHigherBMI);
