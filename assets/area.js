const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const btn = document.querySelector("#checkBtn");
const outputBox = document.querySelector(".outputBox");

btn.addEventListener("click", checkArea);

function checkArea() {
    //check if base is non negative value or not empty
    if((parseInt(baseInput.value) < 0) || (parseInt(baseInput.value) == 0)) {
        showMessage('Base value should be grater than 0');
        return false;
    } else if(!baseInput.value) {
        showMessage("Base is required.");
        return false;
    }

    //check if height is nn negative value or not empty
    if((parseInt(heightInput.value) < 0) || (parseInt(heightInput.value) == 0)) {
        showMessage('Height value should be grater than 0');
        return false;
    } else if (!heightInput.value) {
        showMessage("Height is required.");
        return false;
    }

    calculateArea(Number(baseInput.value), Number(heightInput.value));
}

function showMessage(msg) {
    outputBox.innerHTML = msg;
}

function calculateArea(base, height) {
    let area = 1/2*(base * height);
    showMessage(`The area of the triangle is ${area.toFixed(2)} cm².`);
}

/*
* Number() converts the type whereas parseInt parses the value of input.
* // Parsing
* parseInt('32px'); // 32
* parseInt('5e1'); // 5
*
* // Convert type
* Number('32px'); // NaN
* Number('5e1'); // 50
*/