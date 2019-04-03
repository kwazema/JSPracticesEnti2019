
import util from './utils';
const input = document.getElementById('input');

const LowerCase = () => {
    console.log(util.LowerCase(input.value));
}

const UpperCase = () => {
    console.log(util.UpperCase(input.value));
}

const RandomCase = () => {
    console.log(util.RandomCase(input.value));
}

window.LowerCase = LowerCase;
window.UpperCase = UpperCase;
window.RandomCase = RandomCase;