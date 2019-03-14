const string1 = 'Goku'; //Es mejor usar comillas simples por el estandar.
const string2 = 'Gohan';
const firstChar = string1[0];

console.log(firstChar);

/* ---------------------------- */

const result1 = string1 + string2;
console.log(result1);

/* ---------------------------- */

const result2 = `Bienvenido! ${string1} tu hijo es ${string2}`;
console.log(result2);

/* ---------------------------- */

const length = result2.length;
const resultLower = result2.toLocaleLowerCase(); // toLocaleLowerCase -> todo minusculas
const withOutSpaces = result2.toString(); // toString -> Quita los espacios

console.log(resultLower);