const age = 23;

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'Wine';
} else {
  drink2 = 'Water';
}

// being an expression, a ternary operator can be used in a template literal
console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);
