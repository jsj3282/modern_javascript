const object = { a: 1 };
const { a, b = 2 } = object;
console.log(a);
console.log(b);

function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object);

const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal;
console.log(nickname);
console.log(animal);

const array = [1, 2];
// const one = array[0];
// const two = array[1];

const [one, two] = array;
console.log(one);
console.log(two);

const deepObject = {
    state: {
        information: {
            name: 'jsj',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

// const { name, languages } = deepObject.state.information;
// const { value }   = deepObject;

const {
    state: {
        information: {
            name, languages: [fistLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name,
    fistLang, secondLang,
    value
};

console.log(extracted);


