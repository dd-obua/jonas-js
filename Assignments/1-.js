// assignment 1
const country = 'Uganda';
const continent = 'Africa';
let population = 45000000;

// continent = 'Europe';

console.log(country);
console.log(continent);
console.log(population);

// assignment 2
let isIsLand = false;
let language;

console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// assignment 3
language = 'Acholi';

// assignment 4
const halfPopulation = population / 2;
let newPopulation = population + 1;
console.log(newPopulation);

let finlandsPopulation = 6000000;
let populationDifference = 0;
if (population > finlandsPopulation) {
  populationDifference = population - finlandsPopulation;
  console.log('Yes, my country has more people than Finland');
} else {
  populationDifference = finlandsPopulation - population;
  console.log('No, my Finland has more people than my country');
}

const averagePopulation = 33000000;
if (population > averagePopulation) {
  console.log(
    'No, my country has more people than the averge population of a country'
  );
} else {
  console.log(
    'Yes, my country has less people thant the average population of a country'
  );
}

const description = `Portugal is in Europe, and its 11 million people speak Portuguese`;

// assignment 4
if (population > 33000000) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(`Portugal's population is 22 million below average`);
}
