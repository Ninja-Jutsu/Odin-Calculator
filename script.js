// Variables:
let operator = '';
let position = 0;
let firstNumber = '';
let secondNumber = '';
let screenShow = '';
let equalityCounter = 0;
const numbers = [];

// Collect operands & operators:
const collectDigits = (digit) => {numbers.push(digit);console.log(numbers)}

// Operands:
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const zero = document.querySelector('#zero')

one.onclick= () => { restartEqual();collectDigits(1);Collection(1);screenDisplay(); }
two.onclick = () => { restartEqual();collectDigits(2);Collection(2);screenDisplay (); }
three.onclick = () => { restartEqual();collectDigits(3);Collection(3);screenDisplay (); }
four.onclick = () => { restartEqual();collectDigits(4);Collection(4);screenDisplay (); }
five.onclick = () => { restartEqual();collectDigits(5);Collection(5);screenDisplay (); }
six.onclick = () => { restartEqual();collectDigits(6);Collection(6);screenDisplay (); }
seven.onclick = () => { restartEqual();collectDigits(7);Collection(7);screenDisplay (); }
eight.onclick = () => { restartEqual();collectDigits(8); Collection(8);screenDisplay (); }
nine.onclick = () => { restartEqual();collectDigits(9); Collection(9);screenDisplay (); }
zero.onclick = () => { restartEqual();collectDigits(0); Collection('0');screenDisplay (); }

// Operators:
const equalBtn = document.querySelector('#equal-btn')
const refreshBtn = document.querySelector('#refresh-btn')
const divideBtn = document.querySelector('#divide-btn')
const multiBtn = document.querySelector('#Multi-btn')
const subBtn = document.querySelector('#sub-btn')
const addBtn = document.querySelector('#add-btn')
const powBtn = document.querySelector('#Pow-btn')

equalBtn.onclick = () => {splitArrays();Collection(String(currentResult));screenDisplay();equalityCounter =1; console.log(screenShow); console.log(numbers)}
refreshBtn.onclick= () => {refreshAll();screenDisplay ();}
divideBtn.onclick = () => {refreshArray(); collectDigits('/');Collection('/');screenDisplay ();equalityCounter = 0}
multiBtn.onclick = () => {refreshArray(); collectDigits('*');Collection('*');screenDisplay ();equalityCounter = 0}
subBtn.onclick = () => {refreshArray(); collectDigits('-');Collection('-');screenDisplay ();equalityCounter = 0}
addBtn.onclick = () => {refreshArray(); collectDigits('+');Collection('+');screenDisplay ();equalityCounter = 0}
powBtn.onclick = () => {refreshArray(); collectDigits('^');Collection('^');screenDisplay ();equalityCounter = 0}

// Split First Operand, Second Operand & Operator:
function splitArrays(){
    const operatorIndex = numbers.findIndex(function(index){
        operator = index;
        return position = index == '+' || index == '-' || index == '*' || index == '/' || index == '^' || index == '&'  || index == '√';
    });
    const operatorSplit = numbers.slice(0,operatorIndex);
    const operatorSplit2 = numbers.slice(operatorIndex+1,numbers.length);
    firstNumber = '0';
    for(i=0;i<operatorSplit.length;i++){
        firstNumber += operatorSplit[i];
    }
    for(i=0;i<operatorSplit2.length;i++){
        secondNumber += operatorSplit2[i];
    }
    operate(firstNumber,operator,secondNumber)
    };

// Operations:
function operate(firstNumber, operator, secondNumber){
    if(operator == '+'){
        let result =  add(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == '-'){
        let result = subtract(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == '*'){
        let result = multiply(parseFloat(firstNumber),parseFloat(secondNumber))
        return result
    }
    else if(operator == '/'){
        let result = divide(parseFloat(firstNumber),parseFloat(secondNumber))
        return result
    }
    else if(operator == '^'){
        let result = toPower(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == 'c'){
        let result = refresh();
        return result
    }
};
const refresh = () => currentResult = 0;
const add = (a,b) => {currentResult = a + b; firstNumber = currentResult; secondNumber = '';}
const subtract = (a,b) => {currentResult = a - b; firstNumber = currentResult; secondNumber = '';}
const multiply = (a,b) => {currentResult = a * b; firstNumber = currentResult; secondNumber = '';}
const divide = (a,b) => {currentResult = a / b; firstNumber = currentResult; secondNumber = '';}
const toPower = (a,b) => {currentResult = Math.pow(a, b); firstNumber = currentResult ; secondNumber = '';}

// Display on the screen:
const screen = document.querySelector('#screen')
function screenDisplay (){
     screen.innerHTML = screenShow;
}
function Collection (n){
    if (n == firstNumber){
        screenShow = String(firstNumber);
    }
    else if (screenShow === '0'){
    screenShow = '';
    screenShow += n; 
    }
    else {
        screenShow += n; 
    }
};
    // Refresh screen:
    function refreshAll(){
        numbers.splice(0,numbers.length);
        screenShow = '0';
        firstNumber = '';
    };

// delete button:
const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.onclick = () => 
{
    if(screenShow.length < 1){numbers.splice(0,numbers.length)} 
    else{screenShow = screenShow.slice(0,-1); numbers.pop(); firstNumber = firstNumber.toString().slice(0,-1);}
    screenDisplay ();
}

// Refresh on new operand entered after (=): 
function restartEqual(){
    if (equalityCounter === 1){
        refreshAll();
        equalityCounter = 0;
    }
};

function refreshArray(){
    if(equalityCounter === 1){
    numbers.splice(0,numbers.length);
    numbers.push(firstNumber);
    console.log(currentResult)}
}