function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(50);
    return  '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}

process();

// 여러개의 Promise를 동시에 처리할 때 : Promise.all, 이 중에 하나라도 에러가 발생하면 전체가 에러가 발생한 것으로 간주

async function process2() {
    try {
        const [ dog, rabbit, turtle ] = await Promise.all([getDog(), getRabbit(), getTurtle()]); // 배열 비구조화 할당
    } catch (e) {
        console.log(e);
    }

    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process2();

// 여러개의 Promise 중 가장 빨리 끝난 것만 처리 : Promise.all, 가장 빨리 끝난 것만 에러가 발생할때만 에러로 간주

async function process3() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]); // 배열 비구조화 할당
    console.log(first);
}

process3();

