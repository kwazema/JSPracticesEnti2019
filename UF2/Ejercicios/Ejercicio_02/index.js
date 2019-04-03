//const unvowel = require('unvowel');
import unvowel from 'unvowel';
const input = document.getElementById('input');

const removeVowels = () => {
    const inputValue = input.value;
    const valueWithoutVowels = unvowel.parse(inputValue);

    console.log(valueWithoutVowels);
}

window.removeVowels = removeVowels;