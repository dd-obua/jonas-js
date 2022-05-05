const age = 15;

if (age >= 18) {
  console.log(`Sarah can start using a driver's licence`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years.`);
}
console.log();

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
