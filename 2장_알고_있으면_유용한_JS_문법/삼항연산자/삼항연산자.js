const array = [];
let text = '';
if (array.length === 0) {
    text = '배열이 비어 있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);

let text2 = array.length === 0
    ? '배열이 비어 있습니다.'
    : '배열이 비어있지 않습니다.';
console.log(text2);

const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우!'
    : condition2
        ? 'blabla'
            : 'foo';
console.log(value);