// Game conssts and variable

let inputDir = { x: 0, y: 0 };
let foodSound = new Audio("music/food.mp3");
let gameOverSound = new Audio("music/gameover.mp3");
let gameMove = new Audio("music/move.mp3");
let gameMusic = new Audio("music/music.mp3");
let speed = 3;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 5, y: 7 };
let scoreValue = 0;
let hiscoreBox = document.getElementById("hiscoreBox");

// Game functions
const main = (cTime) => {
  window.requestAnimationFrame(main);
  // gameMusic.play();
  //   console.log(cTime);
  if ((cTime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  } else {
    lastPaintTime = cTime;
    gameEngine();
  }
};

const isCollide = (snake) => {
  // If snake bumps into itself
  for (let i = 1; i < snakeArr.length; i++) {
    // Start from index 1 to avoid comparing the head with itself
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  // If snake bumps into the wall
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
};

const gameEngine = () => {
  // Part 1 : Updating the snake and array
  if (isCollide(snakeArr)) {
    speed = 3;
    gameOverSound.play();
    // gameMusic.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game over press any key to play agsin!");
    snakeArr = [{ x: 13, y: 15 }];
    // gameMusic.play();
    scoreValue = 0;
    document.getElementById("scoreBox").innerHTML = "Score: " + scoreValue;
  }

  // If snake hvae eaten the food incriment the body size and respawn the food

  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    speed = speed + 0.5
    scoreValue += 1; // Increment score value
    document.getElementById("scoreBox").innerHTML = "Score: " + scoreValue;
    
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // for moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;
  // Part  : Display the snake and food

  // Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  // Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  board.appendChild(foodElement);
};

// Game main logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 0 }; // for start the game
  gameMove.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
