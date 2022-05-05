const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // length property
console.log(friends.length - 1); // index of the last element
friends[2] = 'Jay';
console.log(friends); // mutating an array - i.e. changing its elements
console.log();

// using array method
const birthYears = new Array(1990, 1991, 1992, 1993);
console.log(birthYears);

// friends = ['Alice', 'Bob'];

// different types
const firstName = 'Jonas';
const jonas = [firstName, 'Schem', 2022 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
