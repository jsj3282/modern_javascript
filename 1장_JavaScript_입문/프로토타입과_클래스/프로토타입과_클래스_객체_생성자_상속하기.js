// 객체 생성자 함수는 대문자로 작성한다.
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}


// 객체들끼리 공유할 수 있는 값이나 함수를 객체 생성자의 프로토타입으로 설정해준다.
Animal.prototype.say = function () {
    console.log(this.sound);
}

Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);