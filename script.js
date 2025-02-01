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
        return add(num1, num2)
    }
    else if (operation == '-'){
        return subtract(num1, num2)
    }
    else if (operation == '*'){
        return multiply(num1, num2)
    }
    else if (operation == '/'){
        return divide(num1, num2)
    }
    return undefined
}

let num1 = 0
let num2 = 0
let operation = 0

console.log(calculate(1, 3, '+'))
console.log(calculate(2, 3, '-'))
console.log(calculate(6, 3, '/'))
console.log(calculate(7, 3, '-'))
console.log(calculate(1, 5, '*'))
console.log(calculate(1, 2, '%'))
console.log(calculate(5, 8, '/'))