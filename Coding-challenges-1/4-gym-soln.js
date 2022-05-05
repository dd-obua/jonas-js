// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins wins the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas wins the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both wins the trophy');
// }

// bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log('Dolphins wins the trophy');
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log('Koalas wins the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both wins the trophy');
// }

// bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log('Dolphins wins the trophy');
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log('Koalas wins the trophy');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('No one wins the trophy');
}
