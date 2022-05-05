const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
console.log(dolphinsAverage);

const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;
const koalasAverage = (koalas1 + koalas2 + koalas3) / 3;
console.log(koalasAverage);

if (dolphinsAverage >= 100 && koalasAverage >= 100) {
  if (dolphinsAverage === koalasAverage) {
    console.log('There is a draw');
  } else if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins wins!');
  } else {
    console.log('Koalas wins!');
  }
} else {
  console.log('There is no win');
}
