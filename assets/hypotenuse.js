const side_a = document.querySelector("#a");
const side_b = document.querySelector("#b");
const btn = document.querySelector("#checkbtn");
const outputBox = document.querySelector(".outputBox");

btn.addEventListener("click", checkHypotenuse);

function checkHypotenuse() {

    //check if Side a is non negative value or not empty
    if((parseInt(side_a.value) < 0) || (parseInt(side_a.value) == 0)) {
        showMessage('Side a should be grater than 0');
        return false;
    } else if(!side_a.value) {
        showMessage("Side a is required.");
        return false;
    }

    //check if side b is non negative value or not empty
    if((parseInt(side_b.value) < 0) || (parseInt(side_b.value) == 0)) {
        showMessage('Side b value should be grater than 0');
        return false;
    } else if (!side_b.value) {
        showMessage("Side b is required.");
        return false;
    }

    calculateHypotenuse(Number(side_a.value), Number(side_b.value));
}

function showMessage(msg) {
    outputBox.innerHTML = msg;
}

function calculateHypotenuse(a, b) {
    let c = (a*a) + (b*b);
    let sum = Math.sqrt(c);
    showMessage(`Hey! the length of the hypotenuse is ${sum.toFixed(2)} cm`);
}