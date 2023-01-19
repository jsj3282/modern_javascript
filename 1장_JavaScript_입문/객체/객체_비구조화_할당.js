// 객체 비구조화 할당 = 객체 구조분해

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
}

const { name } = ironMan;
console.log(name);

function print({ alias, name, actor }) {                                    // 특정 값을 객체에서 빼움
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

function print2(hero) {                                                     // 특정 값을 객체에서 빼움
    const { alias, name, actor} = hero;
    const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print2(ironMan);
print2(captainAmerica);