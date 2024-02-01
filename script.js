// Function for computers choice //

function getComputerChoice() { const randomNum = Math.floor(Math.random() * 3) + 1; 
if (randomNum === 1) {
    return("rock") } 
else if (randomNum === 2) {
    return("paper") }
else return("scissors") }


// Function for playing a round //


function playRound(player, computer) { player = player.toLowerCase();
if (player === "rock" && computer === "rock") {
    return(drawStatement)} 
else if (player === "rock" && computer === "scissors") {
    return(winStatement) }
else if (player === "rock" && computer === "paper") {
    return(loseStatement)
}
if (player === "paper" && computer === "paper") {
    return(drawStatement)} 
else if (player === "paper" && computer === "rock") {
    return(winStatement) }
else if (player === "paper" && computer === "scissors") {
    return(loseStatement)
}
if (player === "scissors" && computer === "scissors") {
    return(drawStatement)} 
else if (player === "scissors" && computer === "paper") {
    return(winStatement) }
else if (player === "scissors" && computer === "rock") {
    return(loseStatement)
}
else { return(defaultStatement)}
}


// Function for BO5 //

function playGame () { let playerCounter = 0;
let computerCounter = 0;
let resultR1 = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
if (resultR1 === winStatement) {
    playerCounter = playerCounter + 1;
    console.log(`You Win! ${playerCounter} - ${computerCounter}`)
}
else if (resultR1 === loseStatement) {
    computerCounter = computerCounter + 1;
    console.log(`You Lose! ${playerCounter} - ${computerCounter}`)
}
else {
    console.log(`You Drew! ${playerCounter} - ${computerCounter}`)
}
let resultR2 = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
if (resultR2 === winStatement) {
    playerCounter = playerCounter + 1;
    console.log(`You Win! ${playerCounter} - ${computerCounter}`)
}
else if (resultR2 === loseStatement) {
    computerCounter = computerCounter + 1;
    console.log(`You Lose! ${playerCounter} - ${computerCounter}`)
}
else {
    console.log(`You Drew! ${playerCounter} - ${computerCounter}`)
}
let resultR3 = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
if (resultR3 === winStatement) alert
else if (resultR3 === loseStatement) {
    computerCounter = computerCounter + 1;
    console.log(`You Lose! ${playerCounter} - ${computerCounter}`)
}
else {
    console.log(`You Drew! ${playerCounter} - ${computerCounter}`)
}
let resultR4 = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
if (resultR4 === winStatement) {
    playerCounter = playerCounter + 1;
    console.log(`You Win! ${playerCounter} - ${computerCounter}`)
}
else if (resultR4 === loseStatement) {
    computerCounter = computerCounter + 1;
    console.log(`You Lose! ${playerCounter} - ${computerCounter}`)
}
else {
    console.log(`You Drew! ${playerCounter} - ${computerCounter}`)
}
let resultR5 = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
if (resultR5 === winStatement) {
    playerCounter = playerCounter + 1;
    console.log(`You Win! ${playerCounter} - ${computerCounter}`)
}
else if (resultR5 === loseStatement) {
    computerCounter = computerCounter + 1;
    console.log(`You Lose! ${playerCounter} - ${computerCounter}`)
}
else {
    console.log(`You Drew! ${playerCounter} - ${computerCounter}`)
}
let endResult = "You Win! Computer Loses!";
if (playerCounter > computerCounter) {
    console.log(endResult)}
else if (computerCounter > playerCounter) {
    console.log("You Lose! Computer Wins!")
}
else if (computerCounter = playerCounter) {
    console.log("It's a Draw!")
}
     }



const playerSelection = "";
const computerSelection = getComputerChoice();  

const drawStatement = "It's a draw!"
const winStatement = `You Win! ${playerSelection} beats ${computerSelection}`
const loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`
const defaultStatement = "Oops didn't catch that! Must enter rock, paper or scissors!"

console.log(playGame())