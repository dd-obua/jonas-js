const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
console.log(dolphinsAverage);

const koalas1 = 101;
const koalas2 = 95;
const koalas3 = 123;
const koalasAverage = (koalas1 + koalas2 + koalas3) / 3;
console.log(koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log('There is a draw');
} else if (dolphinsAverage > 100 && dolphinsAverage > koalasAverage) {
  console.log('Dolphins wins!');
} else if (koalasAverage > 100 && koalasAverage > dolphinsAverage) {
  console.log('Koalas wins!');
} else {
  console.log('There is no win!');
}
