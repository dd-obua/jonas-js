const age = 18;
if (age === 18) console.log('You just became an adult! (strict)');
if (age == 18) console.log('You just became an adult! (loose)');

// using prompts
const favorite = Number(prompt("What's your favourite number?"));
console.log(favorite);
console.log(typeof favorite);

// if (favorite == 23) {
//   console.log('Cool, 23 is an amazing number');
// }

if (favorite === 23) {
  console.log('Cool, 23 is an awesome number');
} else if (favorite === 7) {
  console.log('Cool, 7 is also an awesome number');
} else if (favorite === 9) {
  console.log('Cool, 9 is also a cool number');
} else {
  console.log('Number is neither 23 nor 7');
}

if (favorite !== 23) console.log('Why not 23');
