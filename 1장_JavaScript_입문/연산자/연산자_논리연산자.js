// NOT !
// AND &&
// OR ||

const a = !true;
console.log(a);

const b = true && false;
console.log(b);

const c = true || false;
console.log(c);

const value = !(true && false || true && false || !false);
console.log(d);

// 연산자 순은 NOT, AND, OR이다.