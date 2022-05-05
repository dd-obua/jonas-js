const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  let winner = '';
  if (avgDolphins >= 2 * avgKoalas) {
    winner = 'Dolphins';
  } else if (avgKoalas >= 2 * avgDolphins) {
    winner = 'Koalas';
  } else {
    winner = 'No team';
  }
  return `${winner} win (${
    avgDolphins > avgKoalas ? scoreDolphin : scoreKoalas
  } vs. ${avgDolphins < avgKoalas ? scoreDolphin : scoreKoalas})`;
};

console.log(checkWinner(scoreDolphin, scoreKoalas));
