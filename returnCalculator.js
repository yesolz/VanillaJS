// 함수의 return 값 활용한 calculator

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    divide: function(a, b){
        return a / b; // 나눗셈 (실수형)
    },
    multiply: function(a, b){
        return a * b;
    },
    powerof: function(a, b){
        return a ** b; // a의 b제곱
    },
    remainder: function(a, b){
        return a % b; // a를 b로 나눈 나머지
    },
};

const plusResult = calculator.plus(2, 10);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(10, minusResult);
const multiplyResult = calculator.multiply(divideResult, plusResult);
const powerofResult = calculator.powerof(divideResult, minusResult);
const remainderesult = calculator.remainder(multiplyResult, powerofResult);

console.log(plusResult);
console.log(minusResult);
console.log(divideResult);
console.log(multiplyResult);
console.log(powerofResult);
console.log(remainderesult);