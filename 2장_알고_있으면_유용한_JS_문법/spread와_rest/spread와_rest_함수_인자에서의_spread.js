function subtract(x, y) {
    return x - y;
}

const result = subtract(1, 2);
console.log(result);

const numbers = [1, 2];
// const result2 = subtract(numbers[0], numbers[2]);
const result2 = subtract(...numbers);
console.log(result2);

function sum(...rest) {
    return rest.reduce((accumulate, current) => accumulate + current, 0);
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...numbers2));

function max(...rest) {
    return rest.reduce((acc, current) => (current > acc ? current : acc), rest[0]);
}

const numbers3 = [1, 2, 3, 4, 10, 5, 6, 7];

const result3 = max(...numbers3);
console.log(result3);