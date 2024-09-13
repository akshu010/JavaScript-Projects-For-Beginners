let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("move");
const userPera = document.getElementById("user");
const compPera = document.getElementById("computer");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
// What to print if game draw
const drawGame = () => {
  msg.innerHTML = "Game was draw! Play again";
  msg.style.backgroundColor = " rgb(16, 16, 43)";
};
// function to show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userPera.innerHTML = userScore;

    msg.innerHTML = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compPera.innerHTML = compScore;

    msg.innerHTML = `You lose.  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
// logic for play game 
const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
