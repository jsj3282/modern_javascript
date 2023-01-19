function print(person) {
    // if (person === undefined || person === null) {
    //     return;
    // }
    if (!person) {
        return;
    }
    console.log(person.name);
}

// const person = {
//     name: 'John'
// };

const person = null;

print(person);

// Falsy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);      // Not a Number

const value = 1 / 'abcd';
console.log(value);

// Truthy
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});

const value2 = { a: 1 };
if (value2) {
    console.log('value가 Truthy 하네요.')
}

const value3 = null;
const truthy = value3 ? true : false;
console.log(truthy);

const value4 = {};
const truthy2 = !!value4;
console.log(truthy2);