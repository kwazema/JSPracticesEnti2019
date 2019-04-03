const LowerCase = (value) => value.toLowerCase(); // => return
const UpperCase = (value) => value.toUpperCase(); // => return

const RandomCase = (value) =>
{
    const random = Math.floor(Math.random() * 2);  

    if (random === 0) value.toLowerCase()
    else value.toUpperCase()

    return value;
}

module.exports = {LowerCase, UpperCase, RandomCase};