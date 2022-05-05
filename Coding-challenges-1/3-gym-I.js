const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
console.log(dolphinsAverage);

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;
const koalasAverage = (koalas1 + koalas2 + koalas3) / 3;
console.log(koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log('There is a draw');
} else if (dolphinsAverage > koalasAverage) {
  console.log('Dolphins wins!');
} else {
  console.log('Koalas wins!');
}
console.log();
