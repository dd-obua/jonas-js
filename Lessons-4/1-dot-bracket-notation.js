const jonasArray = [
  'Jonas',
  'Schmed',
  2022 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// the object literal syntax
const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  age: 2022 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonasObject);
console.log(jonasObject.lastName);
console.log(jonasObject['lastName']);

let nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);
console.log();

//
// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends'
// );

// if (jonasObject[interestedIn]) {
//   console.log(jonasObject[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job and friends'
//   );
// }

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonas';
console.log(jonasObject);

console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends and his best friend is called ${jonasObject.friends[0]}.`
);
