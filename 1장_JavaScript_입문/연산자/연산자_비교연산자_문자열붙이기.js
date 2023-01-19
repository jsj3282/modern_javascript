const a = 1;
const b = 2;
const equals = a === b;
console.log(equals);

// == 의 경우 타입을 비교하지 않는다.

const c = 1;
const d = '1';
const equals2 = c == d;
console.log(equals2);

const e = false;
const f = 0;
const equals3 = e == f;
console.log(equals3);

const g = null;
const h = undefined;
const equals4 = g == h;
console.log(equals4);

const i = 'i';
const j = 'j';
const notEquals = i !== j;
console.log(notEquals);

const k = 1;
const l = '1';
const notEquals2 = k != l;
console.log(notEquals2);

const a1 = 10;
const b1 = 15;
const c1 = 15;

console.log(a1 < b1);
console.log(b1 > a1);
console.log(b1 >= c1);
console.log(a1 <= c1);
console.log(b1 < c1);

const a2 = '안녕';
const b2 = '하세요';

console.log(a2 + b2);




