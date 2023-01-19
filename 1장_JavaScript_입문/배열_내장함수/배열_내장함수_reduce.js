// reduce : 배열 안에 있는 모든 값들을 사용하여 연산할 때 사용

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
    sum += n;
});

console.log(sum);

const sum2 = numbers.reduce((accumulate, current) => accumulate + current, 0);
console.log(sum2);

const avg = numbers.reduce((accumulate, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulate + current) / array.length;
    }
    return accumulate + current;
}, 0);
console.log(avg);