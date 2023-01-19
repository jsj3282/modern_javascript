const a = 1;
if (a + 1 === 2) {
    const a = 2;
    console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

var a2 = 1;
if (a2 + 1 === 2) {
    var a2 = 2;
    console.log('if문 안의 a2 값은 ' + a2);
}
console.log('if문 밖의 a2 값은 ' + a2);

const b = 10;
if (b > 15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b가 15보다 크지 않습니다.');
}

const c = 10;
if (c === 5) {
    console.log('5 입니다!');
} else if (c === 10) {
    console.log('10 입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}


