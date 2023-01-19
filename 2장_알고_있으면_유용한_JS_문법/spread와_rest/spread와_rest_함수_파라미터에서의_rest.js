function sum(...rest) {
    return rest.reduce((accumulate, current) => accumulate + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));