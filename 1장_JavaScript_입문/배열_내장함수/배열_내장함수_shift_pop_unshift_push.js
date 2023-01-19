const numbers = [10, 20, 30, 40];

// shift : 첫번째 요소를 배열에서 꺼냄
const value = numbers.shift();
console.log(value);
console.log(numbers);

// pop : 마지막 요소를 배열에서 꺼냄
const value2 = numbers.pop();
console.log(value2);
console.log(numbers);

// unshift : 배열의 맨 앞에 요소를 삽입
numbers.unshift(5);
console.log(numbers);

// push : 배열의 맨 뒤에 요소를 삽입
numbers.push(50);
console.log(numbers);

// concat : 여러개의 배열을 하나의 새로운 배열로 합침
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(arr1);
console.log(arr2)
console.log(concated);

// spread 문법
const concated2 = [...arr1, ...arr2];
console.log(concated2);

// join : 배열 안에 있는 값을 문자열로 합침
const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '))

