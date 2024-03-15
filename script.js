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
        return(`You lose! ${computer} beats ${player}`) }
    if (player === "paper" && computer === "paper") {
        return(drawStatement)} 
    else if (player === "paper" && computer === "rock") {
        return(`You Win! ${player} beats ${computer}`) }
    else if (player === "paper" && computer === "scissors") {
        return(`You lose! ${computer} beats ${player}`) }
    if (player === "scissors" && computer === "scissors") {
        return(drawStatement)} 
    else if (player === "scissors" && computer === "paper") {
        return(`You Win! ${player} beats ${computer}`) }
    else if (player === "scissors" && computer === "rock") {
        return(`You lose! ${computer} beats ${player}`) }
}

const drawStatement = "It's a draw!";


// DOM script //

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const body = document.querySelector("body");

let playerCounter = 0;
let computerCounter = 0;

const score = document.createElement("div");
body.appendChild(score);
score.style.marginTop = "20px";
score.textContent = `${playerCounter} - ${computerCounter}`;

const div = document.createElement("div");
body.appendChild(div);
div.style.marginTop = "20px";


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
    checkResult();
    score.textContent = `${playerCounter} - ${computerCounter}`;
})

paperButton.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    let resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    div.appendChild(resultDiv);
      if (result === 'You Win! paper beats rock') {
        playerCounter += 1;
      }
      else if (result === 'You lose! scissors beats paper') {
        computerCounter += 1;
      }
    checkResult();
    score.textContent = `${playerCounter} - ${computerCounter}`;
})

scissorsButton.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    let resultDiv = document.createElement("div");
    resultDiv.textContent = result;
    div.appendChild(resultDiv);
      if (result === 'You Win! scissors beats paper') {
        playerCounter += 1;
      }
      else if (result === 'You lose! rock beats scissors') {
        computerCounter += 1;
      }
    checkResult();
    score.textContent = `${playerCounter} - ${computerCounter}`;
})

function checkResult() {
    if (playerCounter === 5) {
        while (div.firstChild) {
            div.removeChild(div.lastChild); }
        alert("You Win!");
        playerCounter = 0;
        computerCounter = 0;
    } 
    else if (computerCounter === 5) {
        while (div.firstChild) {
            div.removeChild(div.lastChild); }
        alert("You Lose!");
        playerCounter = 0;
        computerCounter = 0;
    } }
