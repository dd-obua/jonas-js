const country = 'Uganda';
const language = 'English';
const population = 45000000;
const isIsland = false;

if (language === 'English' && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
