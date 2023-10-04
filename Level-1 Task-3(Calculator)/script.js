let result = document.getElementById("result");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonValue = clickedButton.textContent;

    if (buttonValue === "=") {
        calculateResult();
    } else if (buttonValue === "C") {
        clearResult();
    } else {
        appendToResult(buttonValue);
    }
}

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
