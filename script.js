// Function for computer //

function getComputerChoice() { const randomNum = Math.floor(Math.random() * 3) + 1; 
if (randomNum === 1) {
    return("rock") } 
else if (randomNum === 2) {
    return("paper") }
else return("scissors") }


// Function for playing a round //

function playRound(playerSelection, computerSelection) { playerSelection = playerSelection.toLowerCase();
if (playerSelection === "rock" && computerSelection === "rock") {
    return("It's a draw!")} 
else if (playerSelection === "rock" && computerSelection === "scissors") {
    return("You Win! Rock beats scissors!") }
else if (playerSelection === "rock" && computerSelection === "paper") {
    return("You lose! Paper beats rock!")
}
if (playerSelection === "paper" && computerSelection === "paper") {
    return("It's a draw!")} 
else if (playerSelection === "paper" && computerSelection === "rock") {
    return("You Win! Paper beats rock!") }
else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("You lose! Scissors beats paper!")
}
if (playerSelection === "scissors" && computerSelection === "scissors") {
    return("It's a draw!")} 
else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("You Win! Scissors beats paper!") }
else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("You lose! Rock beats scissors!")
}
else { return("Oops didn't catch that! Must enter rock, paper or scissors!")}
    
}

const playerSelection = "" ;
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))