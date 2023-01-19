const array = [1, 'blabla', {}, 4];
console.log(array);
console.log(array[4]);

const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
]

console.log(objects);
console.log(objects[0]);

objects.push(
    {name: "멍뭉이"}
)
console.log(objects);
console.log(objects.length);

const array2 = [
    1, true, {a: 1}, [1, 2, 3, 4]
];

array2.push(6);
console.log(array2.length);