let startBtnEl = document.getElementById("begin-Btn");
let answerChoicesEl = document.getElementById("containerQ");
let correctAnswerEL = document.getElementById("");
let skipNextEl = document.getElementById("next-Btn");

startBtnEl.addEventListener("click", startGame);

function startGame() {
  startBtnEl.classList.add("hide");
  answerChoicesEl.classList.remove("hide");
  startBtnEl.style.display = "none";
}

function nextQset() {
  skipNextEl.classList.add("hide");
  answerChoicesEl.classList.remove("hide");
  skipNextEl.style.display = "none";
}

function chooseAnswer() {}
