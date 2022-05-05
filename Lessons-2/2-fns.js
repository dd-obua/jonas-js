'use strict';

function logger() {
  console.log('My name is Dan');
}

logger();

function processFruit(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = processFruit(5, 0);
console.log(appleJuice);
// console.log(processFruit(5, 0));

const appleOrangeJuice = processFruit(2, 4);
console.log(appleOrangeJuice);
