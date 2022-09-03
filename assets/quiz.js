const outputBox = document.querySelector(".outputBox");
const checkBtn = document.querySelector("#checkBtn");
const quizForm = document.querySelector(".quiz_form");
const correctAns = {
        question1: "90°",
        question2 : "right angled",
        question3 : "Isosceles triangle",
        question4 : "3.4 cm",
        question5 : "Equal",
    };
checkBtn.addEventListener("click", checkAnswers);

function checkAnswers() {
    let formData = new FormData(quizForm);
    let score = 0;
    for (let [quest, ans] of formData.entries()) {
        if(
            (correctAns[quest] != undefined) &&
            (ans === correctAns[quest])
        ) {
            score += 1;
        }
    }
    showMessage(`Your score is ${score}`);
}

function showMessage(msg) {
    outputBox.innerHTML = msg;
}