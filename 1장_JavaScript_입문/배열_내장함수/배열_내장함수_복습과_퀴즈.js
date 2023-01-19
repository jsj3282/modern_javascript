function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length
}

function countBiggerThanTen2(numbers) {
    let count = 0;
    numbers.forEach(n => {
        if (n > 10) {
            count++;
        }
    });
    return count;
}

function countBiggerThanTen3(numbers) {
    numbers.reduce((accumulate, current) => {
        if (current > 10) {
            return accumulate + 1;
        } else {
            return accumulate;
        }
    }, 0)
}

const count = countBiggerThanTen([1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);