const perc15 = 15;
const perc20 = 20;

const bill = 430;

function calculateTip(bill){
  console.log(bill);
  return bill >= 50 && bill <= 300 ? bill * (perc15/100) : bill * (perc20 / 100);
}

const tip = calculateTip(bill);
console.log(`The bill was ${bill}, the tip was ${tip} and total value was ${bill + tip}`);