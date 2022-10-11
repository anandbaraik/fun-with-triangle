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

//FormData() : its a part of web api. FormData interface allows us to construct a set of key/value pairs representing form fields and their values in JavaScript. FormData object is a common way to create a bundle of data to send to the server using XMLHttpRequest or fetch. It replicates the functionality of the HTML form element.

//FormData.entries() : method returns an iterator of all key/value pairs in the FormData object.

