const rockRight = "images/rock-right.png";
const paperRight = "images/paper-right.png";
const scissorRight = "images/scissor-right.png";
const rockLeft = "images/rock-left.png";
const paperLeft = "images/paper-left.png";
const scissorLeft = "images/scissor-left.png";

const Signs = ["rock", "paper", "scissor"];

let msg = document.querySelector(".message");
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let computerChoice;

msg.innerHTML = "             ";

function Computer() {
  computerChoice = Signs[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function win() {
  msg.innerHTML = "You win! 😃";
  msg.style.color = "#3ee93e";
  playerScore.textContent = parseInt(playerScore.textContent) + 1;
}

function lose() {
  msg.innerHTML = "You lose! 😟";
  msg.style.color = "#e93e3e";
  computerScore.textContent = parseInt(computerScore.textContent) + 1;
}

function setSign(left, right) {
  switch (left) {
    case "rock":
      document.getElementById("playerSign").src = rockLeft;
      break;
    case "paper":
      document.getElementById("playerSign").src = paperLeft;
      break;
    case "scissor":
      document.getElementById("playerSign").src = scissorLeft;
      break;
    default:
      break;
  }
  switch (right) {
    case "rock":
      document.getElementById("computerSign").src = rockRight;
      break;
    case "paper":
      document.getElementById("computerSign").src = paperRight;
      break;
    case "scissor":
      document.getElementById("computerSign").src = scissorRight;
      break;
    default:
      break;
  }
}

function Player(playerChoice) {
  Computer();
  setSign(playerChoice, computerChoice);
  if (playerChoice == computerChoice) {
    msg.textContent = "It's a tie! 🤨";
    msg.style.color = "#727272";
  } else {
    switch (playerChoice) {
      case "rock":
        computerChoice == "scissor" ? win() : lose();
        break;
      case "paper":
        computerChoice == "rock" ? win() : lose();
        break;
      case "scissor":
        computerChoice == "paper" ? win() : lose();
        break;
      default:
        break;
    }
  }
  console.log(computerChoice);
}

function Restart(){
  msg.textContent = "";
  msg.style.color = "black";
  document.getElementById("playerSign").src = rockLeft;
  document.getElementById("computerSign").src = rockRight;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}