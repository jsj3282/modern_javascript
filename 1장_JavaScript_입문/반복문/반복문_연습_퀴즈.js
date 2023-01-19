function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

function biggerThanThree(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 3) {
            continue;
        }
        array.push(numbers[i]);
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));