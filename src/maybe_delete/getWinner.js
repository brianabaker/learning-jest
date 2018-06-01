const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const RPS = [ROCK, PAPER, SCISSORS]

function chooseOneInArray( arr ) {
	return arr[ Math.floor( (Math.random() * arr.length) ) ];
}

let playerA = chooseOneInArray( RPS );
let playerB = chooseOneInArray( RPS );

export function getWinner(playerA, playerB) {
  let playerAWins = 0
  let playerBWins = 0
  let numberToWin = 5
  while (playerAWins < numberToWin && playerBWins < numberToWin){
    if ( playerA===playerB ) {
      return null;
    }
    if ( (playerA===ROCK && playerB===SCISSORS)
    || (playerA===PAPER && playerB===ROCK)
    || (playerA===SCISSORS && playerB===PAPER) ) {
      playerA
    }
    playerB
  }
  return playerAWins > playerBWins ? playerA : playerB
}

// export function playRPS(){
//   let playerA = chooseOneInArray( RPS );
//   let playerB = chooseOneInArray( RPS );
//   let winner = getWinner() || "draw"
//   return winner
// }
