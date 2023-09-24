const DEFAULT_NUM_ONE = 0;
const DEFAULT_OPERATOR = '';
const DEFAULT_SCREEN = "";

const numbers = [];
let currentResult = DEFAULT_NUM_ONE;
let currentOperator = DEFAULT_OPERATOR;
let screenDisplay = DEFAULT_SCREEN;



// Operations:

function operate(operate,num){
    if(operate == '+'){
        let result =  add(num);
        currentOperator = operate
        return result
    }
    else if(operate == '-'){
        let result = subtract(num);
        currentOperator = operate
        return result
    }
    else if(operate == '*'){
        let result = multiply(num)
        currentOperator = operate
        return result
    }
    else if(operate == '/'){
        let result = divide(num)
        currentOperator = operate
        return result
    }
    else if(operate == '^'){
        let result = toPower(num)
        currentOperator = operate
        return result
    }
    else if(operate == '√'){
        let result = sqrRoot()
        currentOperator = operate
        return result
    }
    else if(operate == 'c'){
        let result = refresh();
        return result
    }
    else if(operate == '%'){
        let result = percentage();
        return result
    }
};


const refresh = () => currentResult = 0;
const add = (num) => currentResult += num
const subtract = (num) => currentResult -= num;
const multiply = (num) => currentResult *= num;
const divide = (num) => num != 0 ? currentResult /= num : currentResult= 'Cannot divide on 0';
const toPower = (num) => currentResult = Math.pow(currentResult, num)
const sqrRoot = () => currentResult >= 0 ? currentResult = Math.sqrt(currentResult) : currentResult = 'The inside of sqrRoot must be positive';
const percentage = () => currentResult /= 100;


// Array Functions:
const collectDigits = (digit) => {numbers.push(digit);show()}
const collectCharacters = (character) => screenDisplay += character;
const clearScreen = () => numbers.splice(0,numbers.length);
    

// screen:
const show = () => {
    for (i=0; i<numbers.length;i++){
        screen.innerHTML = screenDisplay;
    }
}


// Operators:
const refreshBtn = document.querySelector('#refresh-btn')
const divideBtn = document.querySelector('#divide-btn')
const multiBtn = document.querySelector('#Multi-btn')
const subBtn = document.querySelector('#sub-btn')
const addBtn = document.querySelector('#add-btn')
const powBtn = document.querySelector('#Pow-btn')
const rootBtn = document.querySelector('#root-btn')
const percentageBtn = document.querySelector('#perce-btn')


refreshBtn.onclick = () => {operate('c');clearScreen(); screenDisplay= '';show()}
divideBtn.onclick = () => {operate('/');collectDigits('/');collectCharacters('/');show()}
multiBtn.onclick = () => {operate('*');collectDigits('*');collectCharacters('*');show()}
subBtn.onclick = () => {operate('-');collectDigits('-');collectCharacters('-');show()}
addBtn.onclick = () => {operate('+');collectDigits('+');collectCharacters('+');show()}
powBtn.onclick = () => {operate('^');collectDigits('^');collectCharacters('^');show()}
rootBtn.onclick = () => {operate('√');collectDigits('√');collectCharacters('√');show()}
percentageBtn.onclick = () => {operate('%');collectDigits('%');collectCharacters('%');show()}

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

one.onclick= () => {collectDigits(1);collectCharacters('1');show()}
two.onclick = () => {collectDigits(2);collectCharacters('2');show()}
three.onclick = () => {collectDigits(3);collectCharacters('3');show()}
four.onclick = () => {collectDigits(4);collectCharacters('4');show()}
five.onclick = () => {collectDigits(5);collectCharacters('5');show()}
six.onclick = () => {collectDigits(6);collectCharacters('6');show()}
seven.onclick = () => {collectDigits(7);collectCharacters('7');show()}
eight.onclick = () => {collectDigits(8);collectCharacters('8');show()}
nine.onclick = () => {collectDigits(9);collectCharacters('9');show()}
zero.onclick = () => {collectDigits(0);collectCharacters('0');show()}

// Screen:

const screen = document.querySelector('#screen');

// screen.innerText = 

