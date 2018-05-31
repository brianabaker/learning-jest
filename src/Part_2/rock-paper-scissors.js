
document.addEventListener("DOMContentLoaded", function(event) {
  // get elements on DOM
  let rockButton = document.getElementById("rock");
  let paperButton = document.getElementById("paper");
  let scissorsButton = document.getElementById("scissors");
  let userScore = document.getElementById('userScore')
  let compScore = document.getElementById('compScore')
  let restartButton = document.getElementById('refresh')

  // where the text is showing on the DOM
  let userPick = document.getElementById("userPick");
  let compPick = document.getElementById("compPick");
  let winner = document.getElementById("nameWinner");
  let declaration = document.getElementById('declareWinner')

  restartButton.addEventListener('click', () => window.location.reload())

  let counter = 0
  export function computerRoll() {
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) {
      computerChoice = "rock";
    } else if (randomNum === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice;
  };

  // EVENT LISTENERS FOR SELECTION
  rockButton.addEventListener("click", () => getWinner("rock"));
  paperButton.addEventListener("click", () => getWinner("paper"));
  scissorsButton.addEventListener("click", () => getWinner("scissors"));

  // compare computer roll and user choice
  export function getWinner(userChoice) {
    let result = ''
    if (counter < 5){
      let compChoice = computerRoll();
      if (userChoice === "rock" && compChoice === "scissors") {
        result = "You Win This Round!";
        counter++
        userScore.innerHTML++
      } else if (userChoice === "rock" && compChoice === "paper") {
        result = "Computer Wins This Round!";
        counter++
        compScore.innerHTML++
      } else if (userChoice === "paper" && compChoice === "rock"){
        result = "You Win This Round!";
        counter++
        userScore.innerHTML++
      } else if (userChoice === "paper" && compChoice === "scissors") {
        result = "Computer Wins This Round!";
        counter++
        compScore.innerHTML++
      } else if (userChoice === "scissors" && compChoice === "paper") {
        result = "You Win This Round!";
        counter++
        userScore.innerHTML++
      } else if (userChoice === "scissors" && compChoice === "rock") {
        result = "Computer Wins This Round!";
        counter++
        compScore.innerHTML++
      } else {
        result = "It's a tie!"
      }
      userPick.innerHTML = userChoice;
      compPick.innerHTML = compChoice;
      winner.innerHTML = result
    } else {
      let finalUserScore = +(userScore.innerHTML)
      let finalCompScore = +(compScore.innerHTML)
      if (finalUserScore > finalCompScore){
        final = "Final Score: You Win!!"
      } else if (finalCompScore > finalUserScore){
        final = "Final Score: Computer Wins!!"
      }
      declaration.innerHTML = final
    }
  }

})
