const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`
  Bill: ${bills[0]}, Tip: ${tips[0]}, Total: ${totals[0]}
  Bill: ${bills[1]}, Tip: ${tips[1]}, Total: ${totals[1]}
  Bill: ${bills[2]}, Tip: ${tips[2]}, Total: ${totals[2]}
`);
