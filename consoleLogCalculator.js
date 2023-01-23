// console.log와, calculator라는 object 안의 function만 사용하여 계산기 만들기

const calculator = {
    plus: function(a, b){
        console.log(a + b);
    },
    minus: function(a, b){
        console.log(a - b);
    },
    divide: function(a, b){
        console.log(a / b); // 나눗셈 (실수형)
    },
    multiply: function(a, b){
        console.log(a * b);
    },
    powerof: function(a, b){
        console.log(a ** b); // a의 b제곱
    },
    remainder: function(a, b){
        console.log(a % b); // a를 b로 나눈 나머지
    },
};

calculator.plus(2, 10); // 12
calculator.minus(2, 10); // -8
calculator.divide(10, 4); // 2.5
calculator.multiply(10, 4); // 40
calculator.powerof(2, 10); // 1024
calculator.remainder(10, 4); // 2