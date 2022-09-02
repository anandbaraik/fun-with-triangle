/*
* is triangle
*/ 
const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkBtn = document.querySelector("#check_if_traiangle");
const isTriangleOutputBox = document.querySelector(".is-triangle-outputBox");
checkBtn.addEventListener("click", checkIfTriangle);

function checkIfTriangle() {
    if(angle1.value && angle2.value && angle3.value) {
        calculateSumOfAngles(angle1.value, angle2.value, angle3.value);
    } else {
        showMessage("All fields are required!");
    }
}

function showMessage(msg) {
    isTriangleOutputBox.innerHTML = msg;
}

function calculateSumOfAngles(angle1Val, angle2Val, angle3Val) {
    let sum = Number(angle1Val) + Number(angle2Val) + Number(angle3Val);
    if(sum === 180) {
        showMessage("Yo!, the angles form a triangle");
    } else {
        showMessage("Aah!, the angles do not form a triangle");
    }
}