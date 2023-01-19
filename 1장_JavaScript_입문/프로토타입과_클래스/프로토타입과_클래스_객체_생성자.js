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

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);