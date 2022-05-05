const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}

const isTired = false;
// console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log('Sarah can drive');
} else {
  console.log('Someone else should drive');
}
