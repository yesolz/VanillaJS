// 변수 선언
const a = 6;
const b = 2;
let myName = "ys";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "sh";

console.log("your new name is " + myName);


// 배열
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[4]); // fri (컴퓨터는 숫자를 0부터 셈)
daysOfWeek[0] = "MON"; // mon -> MON

daysOfWeek.push("sun"); // 배열 끝에 sun 추가
console.log(daysOfWeek); // sun 추가 되었는지 확인


// 객체
const player = {
    name:"leo",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name); // player의 name에 접근하는 방법 1
console.log(player["name"]); // player의 name에 접근하는 방법 2

player.lastName = "potato"; // property 추가 가능
player.fat = false; //object 안에 property 값 수정 가능
player.points += 15; // obeject 안에 property 값 수정 가능
console.log(player);


// 함수
function sayHello(nameOfPerson, age){ //함수이름(매개변수)
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age); //반환값
}

sayHello("harry", 13);
sayHello("ron", 11);


// 함수2
function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}
plus(3, 19);
divide(98, 20);


// 함수3
const player = {
    name: "Harry",
    sayHello: function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("Ron");
player.sayHello("Snape");