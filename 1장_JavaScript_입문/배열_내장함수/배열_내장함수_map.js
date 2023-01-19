const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
// const squared = array.map(square);

const squared = array.map(n => n * n);

console.log(squared);

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

const superheros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

const index = superheros.indexOf('토르');
console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }
];

const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);

const todo = todos.find(todo => todo.done === true);
console.log(todo);