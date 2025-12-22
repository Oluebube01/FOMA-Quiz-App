// Elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_text");
const timeCount = document.querySelector(".timer .timer_sec");
const nextBtn = document.querySelector(".next_btn");
const restartQuizBtn = resultBox.querySelector(".buttons .restart");
const quitQuizBtn = resultBox.querySelector(".buttons .quit");
const stopBtn = document.querySelector(".stop_btn");
const nicknameInput = document.getElementById("nickname");
const questionCountSelect = document.getElementById("question_count");
const userSpan = document.getElementById("user_span");
const currentScoreSpan = document.getElementById("current_score");

// Game Variables
let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let gameQuestions = [];
let totalQuestions = 15;
const STORAGE_KEY = "foma_quiz_state";

// Section Icons Map
const sectionIcons = {
  "Science and Tech": "fa-microchip",
  Food: "fa-utensils",
  Nature: "fa-leaf",
  Health: "fa-heartbeat",
  Entertainment: "fa-music",
};

// --- Event Listeners ---

window.onload = () => {
  checkSavedState();
};

startBtn.onclick = () => {
  infoBox.classList.add("activeInfo");
  startBtn.parentElement.classList.add("hide"); // Hide start button container
};

exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
  startBtn.parentElement.classList.remove("hide"); // Show it back if checked
};

continueBtn.onclick = () => {
  const nickname = nicknameInput.value.trim();
  if (nickname === "") {
    showToast("Please enter a nickname!", "error");
    return;
  }

  // Setup Game
  userSpan.textContent = nickname;
  totalQuestions = parseInt(questionCountSelect.value);

  // Randomize and slice questions
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  gameQuestions = shuffled.slice(0, totalQuestions);

  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");

  startNewGame();
};

restartQuizBtn.onclick = () => {
  resultBox.classList.remove("activeResult");
  quizBox.classList.add("activeQuiz");

  // Reshuffle for replay
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  gameQuestions = shuffled.slice(0, totalQuestions);

  startNewGame();
};

quitQuizBtn.onclick = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};

nextBtn.onclick = () => {
  if (que_count < gameQuestions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    quesCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(0);
    timeText.textContent = "Time Left";
    nextBtn.style.display = "none";
    saveState();
  } else {
    console.log("Questions completed");
    showResultBox();
  }
};

stopBtn.onclick = () => {
  // Custom Confirmation Toast/Modal
  const existing = document.querySelector(".confirm-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "confirm-toast";
  toast.innerHTML = `
        <div class="confirm-content">
            <p>End game now?</p>
            <div class="confirm-btns">
                <button id="yesBtn">Yes</button>
                <button id="noBtn">No</button>
            </div>
        </div>
    `;
  document.body.appendChild(toast);

  document.getElementById("yesBtn").onclick = () => {
    showResultBox();
    toast.remove();
  };

  document.getElementById("noBtn").onclick = () => {
    toast.remove();
  };
};

// --- Functions ---

function startNewGame() {
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  currentScoreSpan.innerText = userScore;

  showQuestions(que_count);
  quesCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(0);
  saveState();
}

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const which_section = document.querySelector(".which_section");

  const currentQ = gameQuestions[index];
  const iconClass = sectionIcons[currentQ.section] || "fa-question-circle";

  // Update Section Badge
  which_section.innerHTML = `<span class="badge"><i class="fas ${iconClass}"></i> ${currentQ.section}</span>`;

  // Update Question
  let que_tag = "<span>" + currentQ.numb + ". " + currentQ.question + "</span>";
  que_text.innerHTML = que_tag;

  // Update Options
  let option_tag = "";
  // Shuffle options for extra randomness if desired, but sticking to order is fine
  for (let i = 0; i < currentQ.options.length; i++) {
    option_tag += `<div class="option" onclick="optionSelected(this)"><span>${currentQ.options[i]}</span></div>`;
  }
  optionList.innerHTML = option_tag;
}

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.querySelector("span").innerText; // get text from span
  let correctAns = gameQuestions[que_count].answer;
  let allOptions = optionList.children.length;

  if (userAns == correctAns) {
    userScore += 1;
    currentScoreSpan.innerText = userScore;
    answer.classList.add("correct");
    answer.insertAdjacentHTML(
      "beforeend",
      '<div class="icon tick"><i class="fas fa-check"></i></div>'
    );
    showToast("Correct Answer!", "success");
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML(
      "beforeend",
      '<div class="icon cross"><i class="fas fa-times"></i></div>'
    );
    showToast("Wrong Answer!", "error");

    for (let i = 0; i < allOptions; i++) {
      // Auto select correct answer
      if (
        optionList.children[i].querySelector("span").innerText == correctAns
      ) {
        optionList.children[i].setAttribute("class", "option correct");
        optionList.children[i].insertAdjacentHTML(
          "beforeend",
          '<div class="icon tick"><i class="fas fa-check"></i></div>'
        );
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.style.display = "block";
  saveState();
}

function showResultBox() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");

  const scoreText = resultBox.querySelector(".score_text");
  const percentage = (userScore / gameQuestions.length) * 100;

  let message = "";
  if (percentage > 80) message = "You actully Rock! 😎";
  else if (percentage > 50) message = "Nice Try! 👍";
  else message = "Keep Learning! 📚";

  let scoreTag = `<span>${message} <p>${userScore}</p> out of <p>${gameQuestions.length}</p></span>`;
  scoreText.innerHTML = scoreTag;

  // Clear state on finish
  localStorage.removeItem(STORAGE_KEY);
  showToast("Game Completed!", "success");
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--;
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter);
      timeCount.textContent = "00";
      timeText.textContent = "Time Off";
      const allOptions = optionList.children.length;
      let correctAns = gameQuestions[que_count].answer;
      for (let i = 0; i < allOptions; i++) {
        if (
          optionList.children[i].querySelector("span").textContent == correctAns
        ) {
          optionList.children[i].setAttribute("class", "option correct");
          optionList.children[i].insertAdjacentHTML(
            "beforeend",
            '<div class="icon tick"><i class="fas fa-check"></i></div>'
          );
        }
      }
      for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
      }
      nextBtn.style.display = "block";
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 20); // Update every 20ms
  let totalTime = timeValue * 1000; // 20000ms
  let width = 0;

  function timer() {
    time += 20;
    width = (time / totalTime) * 100;
    timeLine.style.width = width + "%";
    if (width >= 100) {
      clearInterval(counterLine);
    }
  }
}

function quesCounter(index) {
  //creating a new span tag and passing the question number and total question
  const bottom_ques_counter = quizBox.querySelector(".total_que");
  let totalQuesCountTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    gameQuestions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

// --- State Management ---

function saveState() {
  const state = {
    que_count: que_count,
    que_numb: que_numb,
    userScore: userScore,
    gameQuestions: gameQuestions,
    nickname: userSpan.textContent,
    totalQuestions: totalQuestions,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function checkSavedState() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    showToast("Restoring previous session...", "info");
    const state = JSON.parse(savedState);

    // Restore Variables
    que_count = state.que_count;
    que_numb = state.que_numb;
    userScore = state.userScore;
    gameQuestions = state.gameQuestions;
    totalQuestions = state.totalQuestions;
    userSpan.textContent = state.nickname;
    currentScoreSpan.innerText = userScore;

    // UI
    startBtn.parentElement.style.display = "none"; // Hide start btn wrapper
    quizBox.classList.add("activeQuiz");

    // Resume
    showQuestions(que_count);
    quesCounter(que_numb);
    startTimer(timeValue);
    startTimerLine(0);
  }
}
