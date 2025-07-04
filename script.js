// constants
let displayBox = document.querySelector(".displayL");
let displayUpper = document.querySelector(".displayU");
let OPERATION = [];
let numberButton = document.querySelectorAll(".number");
// let negativeButton = document.querySelector(".negative");
let operatorButton = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");
let backButton = document.querySelector(".backspace");
let equalButton = document.querySelector(".operate");
let answer;
let isAnswerDisplayed = false;

// const clickNegative = function() {
//     if (displayBox.innerText.includes("-")) {
//         displayBox.innerText = displayBox.innerText.replace("-", "")} else {displayBox.innerText = "-" + displayBox.innerText;}};

const clickNumber = function() {
    var numbervalue = this.textContent;
     if (isAnswerDisplayed) {
        displayBox.innerText = "";
        displayUpper.innerText = answer;
        isAnswerDisplayed = false;
    };
    if (displayBox.innerText === "+" || displayBox.innerText === "-" || 
        displayBox.innerText === "*" || displayBox.innerText === "/") {
        if (displayBox !== "") {OPERATION.push(displayBox.innerText);
            displayUpper.innerText = OPERATION.toString().replace(/,/g, "");
            displayBox.innerText = "";
            displayBox.innerText += numbervalue;
        };
        displayBox.innerText = "";
    };
    displayBox.innerText += numbervalue;
    
    console.table(OPERATION);
};

const clickOperator = function() {
    isAnswerDisplayed = false;
    var operatorValue = this.textContent;
    if (displayBox !== "") {OPERATION.push(displayBox.innerText);
        displayUpper.innerText = OPERATION.toString().replace(/,/g, "");
        displayBox.innerText = "";     
        displayBox.innerText += operatorValue;
    };
    displayBox.innerText = ""; 
    displayBox.innerText += operatorValue;

    console.table(OPERATION);
};

const backSpace = function() {
    if (isAnswerDisplayed === true) {   displayBox.innerText = "";
            OPERATION = [];
        } else
    displayBox.innerText = displayBox.innerText.substring(0, displayBox.innerText.length - 1);
} ;

const clearDisplay = function() { 
            displayBox.innerText = "";
            displayUpper.innerText = "";
            OPERATION = []; 
};

// Operators
// When operate is working round with - return +(Math.round(num + "e+6") + "e-6");
const add = function(num1, num2) { 
  return +(Math.round(num1 + num2 + "e+6") + "e-6");

};

const subtract = function(num1, num2) {
	return +(Math.round(num1 - num2 + "e+6") + "e-6");
};

const multiply = function(num1, num2) {
    return +(Math.round(num1 * num2 + "e+6") + "e-6");
};

const divide = function(num1, num2) {
    if (num2 === 0) {alert("Really?!?!"); displayBox.innerText = ""; OPERATION = []; return}
    else
    return +(Math.round(num1 / num2 + "e+6") + "e-6");
};



// Button clicks
// negativeButton.addEventListener("click", clickNegative);

numberButton.forEach(numberButton => {
    numberButton.addEventListener("click", clickNumber);
});

operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener("click", clickOperator);
});

backButton.addEventListener("click", backSpace);

clearButton.addEventListener("click", clearDisplay);

const operate = function() {
    if (displayBox !== "") {OPERATION.push(displayBox.innerText)};
    displayUpper.innerText = OPERATION.toString().replace(/,/g, "");
    OPERATION = OPERATION.filter(item => item !== "");
     if (OPERATION.length != 3) {
        alert("Please press Clear, enter a calculation, and try again.");
        return;
    };
    let num1 = Number(OPERATION[0]);
    let num2 = Number(OPERATION[2]);
    console.log(num1, num2)
    if (OPERATION[1] === "+") {
        let answer = add(num1, num2);
        displayBox.innerText = answer;
        OPERATION = [];
    } else if (OPERATION[1] === "-") {
        let answer = subtract(num1, num2);
        displayBox.innerText = answer;
        OPERATION = [];
    } else if (OPERATION[1] === "*") {
        let answer = multiply(num1, num2);
        displayBox.innerText = answer;
        OPERATION = [];
    } else if (OPERATION[1] === "/") {
        let answer = divide(num1, num2);
        displayBox.innerText = answer;
        OPERATION = [];
    } 
isAnswerDisplayed = true;
console.table(OPERATION);
};

equalButton.addEventListener("click", operate);
