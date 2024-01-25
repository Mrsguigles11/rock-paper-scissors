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
    
}

const playerSelection = "RoCK" ;
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))