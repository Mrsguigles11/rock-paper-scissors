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
    return(`You Win! ${player} beats ${computer}`) }
else if (player === "rock" && computer === "paper") {
    return(`You lose! ${computer} beats ${player}`)
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

const playerSelection = "";
const computerSelection = getComputerChoice();

const drawStatement = "It's a draw!";
const winStatement = `You Win! ${playerSelection} beats ${computerSelection}`;
const loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
const defaultStatement = "Oops didn't catch that! Must enter rock, paper or scissors!"

// DOM script //

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const body = document.querySelector("body");

const div = document.createElement("div");
body.appendChild(div);
div.style.marginTop = "20px";

let playerCounter = 0;
let computerCounter = 0;

rockButton.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    let resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    div.appendChild(resultDiv);
      if (result === 'You Win! rock beats scissors') {
        playerCounter += 1;
      }
      else if (result === 'You lose! paper beats rock') {
        computerCounter += 1;
      }
    console.log(playerCounter);
    console.log(computerCounter);  
})



