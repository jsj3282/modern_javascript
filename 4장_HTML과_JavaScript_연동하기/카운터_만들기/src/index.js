const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1 ;
}