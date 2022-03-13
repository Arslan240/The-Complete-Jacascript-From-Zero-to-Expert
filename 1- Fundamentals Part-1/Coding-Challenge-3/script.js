const dolphins_score = [96, 108, 89];
const koalas_score = [88, 91, 110];
const MIN_SCORE = 50

const dolphins_avg = calculateAverage(dolphins_score);
const koalas_avg = calculateAverage(koalas_score);

function calculateAverage(scores){
  let avg;
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  return sum / scores.length;
}

function declareWinner(){
  
  if(dolphins_avg >= MIN_SCORE && koalas_avg >= MIN_SCORE){
    // both have passed.
    if(dolphins_avg > koalas_avg){
      console.log(`Dolphins have won competition.`);
    }else {
      console.log(`Koalas have won competition.`);
    }
    if(dolphins_avg === koalas_avg) {
      console.log(`The match is draw at score ${dolphins_avg}`);
    }
  }
   if(dolphins_avg < MIN_SCORE){
    console.log('Dolphins failed');
  }
  if(koalas_avg < MIN_SCORE){
    console.log('Koalas Failed');
  }

  if(koalas_avg < MIN_SCORE && dolphins_avg >= MIN_SCORE) {
    console.log(`koalas have failed due to marks of ${koalas_avg}, whereas dolphins have passed with marks ${dolphins_avg};` );
  }
  else if(dolphins_avg < MIN_SCORE && koalas_avg >= MIN_SCORE) {
    console.log(`Dolphins have failed due to marks of ${dolphins_avg}, whereas koalas have passed with marks ${koalas_avg};` );
  }
}


declareWinner();