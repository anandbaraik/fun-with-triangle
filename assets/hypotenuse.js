const side_a = document.querySelector("#a");
const side_b = document.querySelector("#b");
const btn = document.querySelector("#checkbtn");
const outputBox = document.querySelector(".outputBox");

btn.addEventListener("click", checkHypotenuse);

function checkHypotenuse() {
    if(side_a.value && side_b.value) {
        calculateHypotenuse(Number(side_a.value), Number(side_b.value));
    } else {
        showMesage("All fields are required.");
    }
}

function showMesage(msg) {
    outputBox.innerHTML = msg;
}

function calculateHypotenuse(a, b) {
    let c = (a*a) + (b*b);
    let sum = Math.sqrt(c);
    showMesage(`Hey! the length of the hypotenuse is ${sum.toFixed(2)} cm`);
}