let mark_mass = 78;
let mark_height = 1.69;

let john_mass = 92;
let john_height = 1.95;

const markBMI = calculateBMI(mark_mass, mark_height);
const johnBMI = calculateBMI(john_mass, john_height);

let markHigherBMI = markBMI > johnBMI;

function calculateBMI(mass, height){
  console.log(mass / (height ** 2));
  return mass / (height ** 2);
}

if(markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`);
}else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})!`);
}