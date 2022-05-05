function cutFruit(fruit) {
  return fruit * 4;
}

function processFruit(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

processFruit(2, 3);
