// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeUp = quiz_box.querySelector("header .time_text");

// calling spinner
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#spinner").style.visibility = "visible";
    } else {
        document.querySelector("#spinner").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
// if start quiz button clicked
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo"); //show info box
}

//if exit button clicked
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo"); // hide the info box
}

// if continue button clicked
continue_btn.onclick = () =>{
    info_box.classList.remove("activeInfo") //hide the info box
    quiz_box.classList.add("activeQuiz") //show the quiz box
    showQuestions(0);
    quesCounter(1);
    startTimer(20);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 20;
let widthValue = 0;
let userScore = 0;

const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () =>{
    result_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 20;
    let widthValue = 0;
    showQuestions(que_count);
    quesCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";

}

quit_quiz.onclick = () =>{
    window.location.reload();
}

// if next button clicked
next_btn.onclick = () =>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        quesCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeUp.textContent = "Time Left";
    }else{
        console.log("Questions completed");
        showResultBox();
    }
}

// getting questins and options from array
function showQuestions(index){
    const which_section = document.querySelector(".which_section");
    const que_text = document.querySelector(".que_text");
    let section_tag = '<span>' + questions[index].section + '</span>'
    let que_tag = '<span>'+ questions[index].numb + ". "+ questions[index].question +'</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' 
    + '<div class="option">'+ questions[index].options[1] + '<span></span></div>' 
    + '<div class="option">'+ questions[index].options[2] + '<span></span></div>' 
    + '<div class="option">'+ questions[index].options[3]+ '<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    which_section.innerHTML = section_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong!");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        // if answer is incorrect then automatically select the correct answer
        for (let i = 0; i < allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    // once user selected disable all other options
    for (let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }

    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 30){
        let scoreTag = '<span>and Congratulations champ, You got<p>' + userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 10){
        let scoreTag = '<span>and nice, You got' + userScore +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got only' + userScore +' out of '+ questions.length +'</span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeUp.textContent = "Time's Up";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }

            next_btn.style.display = "block";
        
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 57);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}
function quesCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index +'</p>Of<p>' + questions.length+'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}