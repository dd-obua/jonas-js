// mathematical/arithmetic operators
const now = 2037;
const jonasAge = 2037 - 1991;
const sarasAge = 2037 - 2018;
console.log(jonasAge, sarasAge);
console.log(jonasAge * 2, jonasAge / 10, 2 ** 3); // 2**3 means 2 raised to the power of 3

// string conscatenation
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// typeof operator - already done

// assignment operators
let x = 10 + 5;
console.log(x);
x += 10; // same as x=x+10
console.log(x);
x *= 4;
console.log(x);
x /= 2;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

// comparision operators - used to produce boolean values
console.log(jonasAge > sarasAge);
console.log(sarasAge >= 18);
