true && true // true
true && false // false
true || false // true
false || true // true

const dog = {
    name: '멍멍이'
}

function getName(animal) {
    if (animal) {
        return animal.name;
    }
    return undefined;
}

const name = getName(dog);
console.log(name);


function getName2(animal) {
    return animal && animal.name;
}

const name2 = getName2(dog);
console.log(name2);

console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');
console.log(1 && 1);

const object = { name: 1 };
const name3 = object && object.name;
console.log(name3);

const namelessDog = {
    name: '',
};

function getName3(animal) {
    const name = animal && animal.name;
    if (!name) {
        return '이름이 없는 동물입니다.';
    }
    return name;
}

const name4 = getName3(namelessDog);
console.log(name4);

function getName4(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name5 = getName4(namelessDog);
console.log(name5);


console.log(false || 'hello');
console.log('' || '이름없다');
console.log(null || '널이다');
console.log(undefined || 'defined 되지 않았다!');
console.log(0 || '제로다');
console.log(1 || '음?');
console.log(true || '여기 안본다.');
console.log('와아' || '여기 안봐요');
console.log([] || '노노');