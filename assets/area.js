const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const btn = document.querySelector("#checkBtn");
const outputBox = document.querySelector(".outputBox");

btn.addEventListener("click", checkArea);

function checkArea() {
    if(baseInput.value && heightInput.value) {
        calculateArea(Number(baseInput.value), Number(heightInput.value));
    } else {
        showMessage("All fields are required.");
    }
}

function showMessage(msg) {
    outputBox.innerHTML = msg;
}

function calculateArea(base, height) {
    let area = 1/2*(base * height);
    showMessage(`The area of the triangle is ${area.toFixed(2)} cm².`);
}