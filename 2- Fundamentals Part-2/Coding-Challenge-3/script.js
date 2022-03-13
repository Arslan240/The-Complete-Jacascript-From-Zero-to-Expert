const mark = {
  fullName: 'Mark MIllers',
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John d',
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI(); //this creates a new field of bmi in mark object
console.log(mark.bmi);
john.calcBMI();
console.log(john.bmi);

if(mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI ${john.bmi}`);
} else {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`);

}

