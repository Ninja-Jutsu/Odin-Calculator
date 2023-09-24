const DEFAULT_NUM_ONE = 0;
const DEFAULT_NUM_TWO = 1;
const DEFAULT_OPERATOR = '-';

let currentResult = DEFAULT_NUM_ONE;
let currentSecondNumber = DEFAULT_NUM_TWO;
let currentOperator = DEFAULT_OPERATOR;

function add(a) {
    let result = currentResult+a;
    return result
}
function subtract(a) {
    let result = currentResult-a;
    return result
} 
function multiply(a){
    let result = currentResult*a;
    return result
}
function divide(a){
    let result = currentResult-a;
    return result
}

const finalResult = function operate(a,c){
    if(c == '+'){
        let result =  add(a);
        return result
    }
    if(c == '-'){
        let result = subtract(a);
        return result
    }
    if(c == '*'){
        let result = multiply(a)
        return result
    }
    if(c == '/'){
        let result = divide(a)
        return result
    }
}



operate(5,'+')
console.log(operate(5,'+'))
operate(2,'-')
console.log(operate(2,'-'))