let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector(".newBtn");
let msg = document.querySelector(".WinnerAnnounce");

let turnX = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnX = false;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!!!");
    if (turnX) {
      //playerX
      box.innerText = "X";
      box.style.color = "red";
      turnX = false;
    } else {
      //playerO
      box.innerText = "O";
      box.style.color = "green";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

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

const winnerMessagefunc = (winner) => {
  msg.innerHTML = `Congrulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner is", pos1Val);
        winnerMessagefunc(pos1Val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
