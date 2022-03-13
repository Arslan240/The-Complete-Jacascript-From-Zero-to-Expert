

calcAverage = (scores) => {
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  return sum / scores.length;
}

checkWinner = (avgDolphins, avgKoalas) => {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins won from Koalas with (${avgDolphins} vs ${avgKoalas})`);
  } else if(avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas won from Dolphins with (${avgKoalas} vs ${avgDolphins})`);
  }
  else {
    console.log('No team wons...');
  }
}

let avgKoalas = calcAverage([65,54,49]);
let avgDolphins = calcAverage([44,23,71]);

checkWinner(avgDolphins, avgKoalas);