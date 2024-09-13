let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgBox = document.querySelector(".game-winner");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newgame");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgBox.style.display = "none";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });



  const showWinner = (winner) => {
    msg.innerHTML = `Congratulatios winner is ${winner}`;
    msgBox.style.display = "block";
    disableBoxes();
  };
  const checkWinner = () => {
    for (let pattern of winPattern) {
      let posVal1 = boxes[pattern[0]].innerText;
      let posVal2 = boxes[pattern[1]].innerText;
      let posVal3 = boxes[pattern[2]].innerText;

      if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
        if (posVal1 === posVal2 && posVal2 === posVal3) {
          showWinner(posVal1);
        }
      }
    }
  };

  newGame.addEventListener("click",()=>{
    resetGame();
  })
  resetBtn.addEventListener("click",()=>{
    resetGame();
  })
});
