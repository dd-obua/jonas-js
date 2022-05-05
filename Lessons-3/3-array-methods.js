const friends = ['Michael', 'Steven', 'Peter'];

// add elements to the end of an array
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends.push('Denis'));
console.log(friends);

// add elements to the beginnng of an array
friends.unshift('John');
console.log(friends);

// remove elements from an array
// remove last element of the array
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(popped);

// remove first element of the array
const removed = friends.shift();
console.log(friends);
console.log(removed);

// position of an array element in the array
friends.push(23);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Denis'));
console.log(friends.includes('Peter'));
console.log(friends.includes('Dan'));
console.log(friends.includes(23));
console.log(friends.includes('23'));

if(friends.includes('Peter')){
  console.log( `Your have a friend called Peter` );