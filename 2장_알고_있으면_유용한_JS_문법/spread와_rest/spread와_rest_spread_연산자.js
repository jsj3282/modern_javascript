const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    color: 'green',
    ...purpleCuteSlime,
    // color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

const slime2 = {
    name: '슬라임2'
};

const cuteSlime2 = slime2;
cuteSlime2.attribute = 'cute';

const purpleCuteSlime2 = cuteSlime2;
purpleCuteSlime2.color = 'purple';

console.log(slime2);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);

const animals = ['개', '고양이', '참새'];
// const anotherAnimals = animals.concat('비둘기');
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);