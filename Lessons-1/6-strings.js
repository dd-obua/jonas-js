const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);
console.log(`Just a regular string...`);

// creating multiline strings
console.log('Strings with \nmultiple lines\nare used here');
console.log(`No need to wory
about excape characters,
just drop to the next line`);
