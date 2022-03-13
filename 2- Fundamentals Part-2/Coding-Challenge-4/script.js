const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
}
// BUG

bills.forEach((bill) => {
  const tip = calcTip(bill);
  tips.push(tip);
  totals.push(tip + bill);
});

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Total: " + totals);

console.log("OP9");
