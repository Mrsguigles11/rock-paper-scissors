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
    return(drawStatement)} 
else if (playerSelection === "rock" && computerSelection === "scissors") {
    return(winStatement) }
else if (playerSelection === "rock" && computerSelection === "paper") {
    return(loseStatement)
}
if (playerSelection === "paper" && computerSelection === "paper") {
    return(drawStatement)} 
else if (playerSelection === "paper" && computerSelection === "rock") {
    return(winStatement) }
else if (playerSelection === "paper" && computerSelection === "scissors") {
    return(loseStatement)
}
if (playerSelection === "scissors" && computerSelection === "scissors") {
    return(drawStatement)} 
else if (playerSelection === "scissors" && computerSelection === "paper") {
    return(winStatement) }
else if (playerSelection === "scissors" && computerSelection === "rock") {
    return(loseStatement)
}
else { return(defaultStatement)}
}

const playerSelection = "sciors" ;
const computerSelection = getComputerChoice();

const drawStatement = "It's a draw!"
const winStatement = `You Win! ${playerSelection} beats ${computerSelection}`
const loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`
const defaultStatement = "Oops didn't catch that! Must enter rock, paper or scissors!"

console.log(playRound(playerSelection, computerSelection))