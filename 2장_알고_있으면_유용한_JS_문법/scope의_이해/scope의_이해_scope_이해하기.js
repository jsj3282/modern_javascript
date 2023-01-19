// Global, Function, Block

// const value = 'hello!';                 // global

// function myFunction() {
//     console.log('myFunction: ');
//     console.log(value);
// }
//
// function otherFunction() {
//     console.log('otherFunction: ');
//     const value = 'bye!';               // function
//     console.log(value);
// }
//
// myFunction();
// otherFunction();
//
// console.log('global scope: ');
// console.log(value);

// function myFunction() {
//     const value = 'bye!';
//     const anotherValue = 'world';
//     function functionInside() {
//         console.log('functionInside: ');
//         console.log(value);
//         console.log(anotherValue);
//     }
//     functionInside();
// }
//
// myFunction();
// console.log('global scope:')
// console.log(value);
// console.log(anotherValue);

// function myFunction() {
//     const value = 'bye!';
//     if (true) {
//         const value = 'world';
//         console.log('block scope:' );
//         console.log(value);
//     }
//     console.log('function scope: ')
//     console.log(value);
// }

// myFunction();
// console.log('global scope:')
// console.log(value);

// var value = 'hello!';
//
// function myFunction2() {
//     var value = 'bye!';
//     if (true) {
//         var value = 'world';
//         console.log('block scope:' );
//         console.log(value);
//     }
//     console.log('function scope: ')
//     console.log(value);
// }
//
// myFunction();
// console.log('global scope:')
// console.log(value);

let value = 'hello!';

function myFunction2() {
    let value = 'bye!';
    if (true) {
        let value = 'world';
        console.log('block scope:' );
        console.log(value);
    }
    console.log('function scope: ')
    console.log(value);
}

myFunction();
console.log('global scope:')
console.log(value);