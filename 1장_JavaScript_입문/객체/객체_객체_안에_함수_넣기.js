const dog = {
    name: '멍멍이',
    sound: '멍멍',
    // say: function say() {
    //     console.log(this.sound);            // 여기서 this는 자기 자신(dog)이다.
    // }
    say() {
        console.log(this.sound);
    }
    // say: () => {                                // 화살표 함수에서 this는 작동하지 않는다.
    //     console.log(this.sound);
    // }
}

dog.say();

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;                         // 객체 밖으로 꺼낸 함수에서 this는 작동하지 않는다.
catSay();