// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(123));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // coerces all to numbers
console.log('23' + '10' + 3); // coerces all to strings
console.log('23' * '10'); // coerces all to numbers
console.log('23' / '2'); // coerces all to numbers
console.log('23' > '18'); // (possibly coerces all to numbers)

let n = '1' + 1;
n -= 1;
console.log(n);

const value1 = '5';
const value2 = 9;
let sum = Number(value1) + value2;
console.log(sum);
