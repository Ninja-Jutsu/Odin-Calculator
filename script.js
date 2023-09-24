// const DEFAULT_NUM_ONE = 0;
// const DEFAULT_OPERATOR = '';
// const DEFAULT_SCREEN = "";

// const numbers = [];
// const math = [];
// let currentResult = DEFAULT_NUM_ONE;
// let currentOperator = DEFAULT_OPERATOR;
// let screenDisplay = DEFAULT_SCREEN;

// // function doMath (){
// //     for(i=0; i<numbers.length;i++){
// //         let firstNumber = 
// //     }
// // }




// // Operations:

// function operate(operate,num){
//     if(operate == '+'){
//         let result =  add(num);
//         currentOperator = operate
//         return result
//     }
//     else if(operate == '-'){
//         let result = subtract(num);
//         currentOperator = operate
//         return result
//     }
//     else if(operate == '*'){
//         let result = multiply(num)
//         currentOperator = operate
//         return result
//     }
//     else if(operate == '/'){
//         let result = divide(num)
//         currentOperator = operate
//         return result
//     }
//     else if(operate == '^'){
//         let result = toPower(num)
//         currentOperator = operate
//         return result
//     }
//     else if(operate == '√'){
//         let result = sqrRoot()
//         currentOperator = operate
//         return result
//     }
//     else if(operate == 'c'){
//         let result = refresh();
//         return result
//     }
//     else if(operate == '%'){
//         let result = percentage();
//         return result
//     }
// };





// // Array Functions:
// const collectDigits = (digit) => {numbers.push(digit);show()}
// const collectCharacters = (character) => screenDisplay += character;

    

// // screen:
// const show = () => {
//     for (i=0; i<numbers.length;i++){
//         screen.innerHTML = screenDisplay;
//     }
// }

// // Operators:
// const refreshBtn = document.querySelector('#refresh-btn')
// const divideBtn = document.querySelector('#divide-btn')
// const multiBtn = document.querySelector('#Multi-btn')
// const subBtn = document.querySelector('#sub-btn')
// const addBtn = document.querySelector('#add-btn')
// const powBtn = document.querySelector('#Pow-btn')
// const rootBtn = document.querySelector('#root-btn')
// const percentageBtn = document.querySelector('#perce-btn')


// refreshBtn.onclick = () => {operate('c');clearScreen(); screenDisplay= '';show()}
// divideBtn.onclick = () => {operate('/');collectDigits('/');collectCharacters('/');show()}
// multiBtn.onclick = () => {operate('*');collectDigits('*');collectCharacters('*');show()}
// subBtn.onclick = () => {operate('-');collectDigits('-');collectCharacters('-');show()}
// addBtn.onclick = () => {operate('+');collectDigits('+');collectCharacters('+');show()}
// powBtn.onclick = () => {operate('^');collectDigits('^');collectCharacters('^');show()}
// rootBtn.onclick = () => {operate('√');collectDigits('√');collectCharacters('√');show()}
// percentageBtn.onclick = () => {operate('%');collectDigits('%');collectCharacters('%');show()}





// // Screen:

// const screen = document.querySelector('#screen');






// Collect operands and operator:
let operator = '';
let position = 0;
let firstNumber = '';
let secondNumber = '';

const numbers = [];

function splitArrays(){
    console.log(firstNumber)
    console.log(secondNumber)
    const operatorIndex = numbers.findIndex(function(index){
        operator = index;
        return position = index == '+' || index == '-' || index == '*' || index == '/';
    });
    const operatorSplit = numbers.slice(0,operatorIndex);
    const operatorSplit2 = numbers.slice(operatorIndex+1,numbers.length);
    for(i=0;i<operatorSplit.length;i++){
        firstNumber += operatorSplit[i];
    }
    for(i=0;i<operatorSplit2.length;i++){
        secondNumber += operatorSplit2[i];
    }
    console.log(firstNumber)
    console.log(secondNumber)
    operate(firstNumber,operator,secondNumber)
    clearScreen();
    }

// Numbers:
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const zero = document.querySelector('#zero')


one.onclick= () => {collectDigits(1);}
two.onclick = () => {collectDigits(2);}
three.onclick = () => {collectDigits(3);}
four.onclick = () => {collectDigits(4);}
five.onclick = () => {collectDigits(5);}
six.onclick = () => {collectDigits(6);}
seven.onclick = () => {collectDigits(7);}
eight.onclick = () => {collectDigits(8);}
nine.onclick = () => {collectDigits(9);}
zero.onclick = () => {collectDigits(0);}

const collectDigits = (digit) => {numbers.push(digit);}

// Operators:
const equalBtn = document.querySelector('#equal-btn')
const refreshBtn = document.querySelector('#refresh-btn')
const divideBtn = document.querySelector('#divide-btn')
const multiBtn = document.querySelector('#Multi-btn')
const subBtn = document.querySelector('#sub-btn')
const addBtn = document.querySelector('#add-btn')
const powBtn = document.querySelector('#Pow-btn')
const rootBtn = document.querySelector('#root-btn')
const percentageBtn = document.querySelector('#perce-btn')

equalBtn.onclick = () => {splitArrays()}
// refreshBtn.onclick = () => {splitArrays()}
divideBtn.onclick = () => {collectDigits('/');}
multiBtn.onclick = () => {collectDigits('*');}
subBtn.onclick = () => {collectDigits('-');}
addBtn.onclick = () => {collectDigits('+');}
powBtn.onclick = () => {collectDigits('^');}
rootBtn.onclick = () => {collectDigits('√');}
percentageBtn.onclick = () => {collectDigits('%');}


// Operations:

function operate(firstNumber, operator, secondNumber){
    if(operator == '+'){
        let result =  add(parseInt(firstNumber),parseInt(secondNumber));
        currentOperator = operator
        return result
    }
    else if(operator == '-'){
        let result = subtract(parseInt(firstNumber),parseInt(secondNumber));
        currentOperator = operator
        return result
    }
    else if(operator == '*'){
        let result = multiply(parseInt(firstNumber),parseInt(secondNumber))
        currentOperator = operator
        return result
    }
    else if(operator == '/'){
        let result = divide(parseInt(firstNumber),parseInt(secondNumber))
        currentOperator = operator
        return result
    }
    else if(operator == '^'){
        let result = toPower(parseInt(firstNumber),parseInt(secondNumber))
        currentOperator = operator
        return result
    }
    else if(operator == '√'){
        let result = sqrRoot(parseInt(firstNumber))
        currentOperator = operator
        return result
    }
    else if(operator == 'c'){
        let result = refresh();
        currentOperator = operator
        return result
    }
    else if(operate == '%'){
        let result = percentage(parseInt(firstNumber));
        currentOperator = operator
        return result
    }
};

const refresh = () => currentResult = 0;
const add = (a,b) => {currentResult = a + b; firstNumber = currentResult; secondNumber = ''; console.log(currentResult)}
const subtract = (a,b) => {currentResult = a - b; firstNumber = currentResult; secondNumber = ''; console.log(currentResult)}
const multiply = (a,b) => {currentResult = a * b; firstNumber = currentResult; secondNumber = ''; console.log(currentResult)}
const divide = (a,b) => {currentResult = a / b; firstNumber = currentResult; secondNumber = ''; console.log(currentResult)}
const toPower = (a,b) => {currentResult = Math.pow(a, b); firstNumber = currentResult; secondNumber = ''; console.log(currentResult)}
const sqrRoot = () => currentResult >= 0 ? currentResult = Math.sqrt(currentResult) : currentResult = 'The inside of sqrRoot must be positive';
const percentage = () => currentResult /= 100;

const clearScreen = () => numbers.splice(0,numbers.length);