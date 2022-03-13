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

console.log('JohnBMI:',johnBMI, 'MarkBMI:', markBMI );
console.log(markHigherBMI);