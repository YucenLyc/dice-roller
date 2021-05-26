
let number = process.argv[2];


function rollingDice(number){

  let diceResults = "";

  for (var i = 0; i < number; i++){
    let resultOfEachDice = "";           //so it's a string 
    resultOfEachDice = (Math.floor(Math.random() * 6) + 1);
    diceResults += resultOfEachDice + ", "; 
  }
  var comma = diceResults.lastIndexOf(",");

  return diceResults;
  
}
console.log("Rolled " + number + " dice: " + rollingDice(number));

 