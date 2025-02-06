let currentDisplay = document.querySelector("p.solution")
let num1 = undefined
let num2 = undefined
let operation = undefined
let clearNext = false

function add (a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a/b
}

function calculate(num1, num2, operation){
    if (operation == '+'){
        return add(parseInt(num1), parseInt(num2))
    }
    else if (operation == '-'){
        return subtract(parseInt(num1), parseInt(num2))
    }
    else if (operation == '*'){
        return multiply(parseInt(num1), parseInt(num2))
    }
    else if (operation == '/'){
        if (parseInt(num2) != 0)
        {
            return divide(parseInt(num1), parseInt(num2))
        }
    }
    return 'OOPS!'
}

function clearDisplay(){
    currentDisplay.textContent = ''
}

function addToDisplay(buttonID){
    let buttonPressed = document.querySelector(buttonID)
    currentDisplay.textContent += buttonPressed.textContent
}

const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "gray"
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "floralwhite"
    });
});

const numBtns = document.querySelectorAll("button.number");
numBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        // if the last button pressed was not a number, a new number will begin
        if (clearNext){
            clearDisplay()
            clearNext = false
        }
        let id = "#" + numBtn.getAttribute("id")
        addToDisplay(id)
    });
});

const opBtns = document.querySelectorAll("button.operation");
opBtns.forEach((opBtn) => {
    opBtn.addEventListener("click", () => {
        if (num1 === undefined){
            num1 = currentDisplay.textContent}
        else {
            num2 = currentDisplay.textContent
            currentDisplay.textContent = calculate(num1, num2, operation)
            num2 = undefined
            num1 = currentDisplay.textContent
        }
        operation = opBtn.textContent
        clearNext = true
    });
});

const equalBtn = document.querySelector("#equals");
equalBtn.addEventListener("click", () => {
    if (num1 != undefined && operation != undefined){
        num2 = currentDisplay.textContent
        currentDisplay.textContent = calculate(num1, num2, operation)
        num1 = undefined
        num2 = undefined
        clearNext = true
    }
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    clearDisplay()
    num1 = undefined
    num2 = undefined
    operation = undefined
});