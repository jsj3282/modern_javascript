// 자바스크립트 엔진이 코드를 해석하는 과정에서 아래에 있어도 호출 가능

myFunction();

function myFunction() {
    console.log('hello world');
}

// console.log(number);
// var number = 2;

var number;
console.log(number);
number = 2;

// 그러나 const, let은 hoisting이 동작하지 않음 그러나 babel이 const, let을 var로 변환

function fn() {
    console.log(a);
    // let a = 2;
    // const a = 2;
    var a = 2;
}

fn();

// 함수에서 hoisting 방지법 - ESLint를 사용해도 방지됨.

myFunction2();

const myFunction2 = function myFunction() {
    console.log('hello world');
}