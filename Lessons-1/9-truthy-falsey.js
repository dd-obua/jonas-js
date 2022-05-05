console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log('');

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

const cash = 100;
if (cash) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

// check whether a variable is defined
let height;
if (height) {
  console.log('Hey, height is defined');
} else {
  console.log('Height is undefined');
}
