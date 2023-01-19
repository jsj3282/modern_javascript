const numbers = [10, 20, 30, 40];

// splice : 배열에서 특정 인덱스부터 제거, index가 파라미터
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);

// slice는 splice와 달리 기존 배열에 변화를 주지 않는다.
const numbers2 = [10, 20, 30, 40];
const sliced = numbers2.slice(0, 2);
console.log(sliced);
console.log(numbers2);