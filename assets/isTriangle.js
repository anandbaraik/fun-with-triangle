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

    //check if angle 1 is non negative value or not empty
    if((parseInt(angle1.value) < 0) || (parseInt(angle1.value) == 0)) {
        showMessage('Angle 1 should be grater than 0');
        return false;
    } else if(!angle1.value) {
        showMessage("Angle 1 is required.");
        return false;
    }

    //check if angle 2 is non negative value or not empty
    if((parseInt(angle2.value) < 0) || (parseInt(angle2.value) == 0)) {
        showMessage('Angle 2 should be grater than 0');
        return false;
    } else if(!angle2.value) {
        showMessage("Angle 2 is required.");
        return false;
    }

    //check if angle 3 is non negative value or not empty
    if((parseInt(angle3.value) < 0) || (parseInt(angle3.value) == 0)) {
        showMessage('Angle 3 should be grater than 0');
        return false;
    } else if(!angle3.value) {
        showMessage("Angle 3 is required.");
        return false;
    }

    calculateSumOfAngles(angle1.value, angle2.value, angle3.value);
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