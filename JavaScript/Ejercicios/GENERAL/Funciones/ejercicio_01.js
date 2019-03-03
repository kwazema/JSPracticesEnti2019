/* --- Numeros --- */

let num1 = 5;
let num2 = 12;
let num3 = 24.25;


/* --- Ejercicio 01 --- */

const Ejercicio1 = (a, b) => a + b; //solo retorno
const result = Ejercicio1(5, 2);

console.log(`Ejercicio 1: [${Ejercicio1(num1, num2)}]`);


/* --- Ejercicio 02 --- */

const Ejercicio2 = (a) => (a % 2) === 0; //solo retorno

console.log(`Ejercicio 2: [${Ejercicio2(num1)}]`);
console.log(`Ejercicio 2: [${Ejercicio2(num2)}]`);


/* --- Ejercicio 04 --- */

const Ejercicio4 = (a) => { //=> identifica que es una funcion
    
    let rValor1 = a % 1;
    let rValor2 = (a % 1) === 0;

    return [rValor1, rValor2];
};

console.log(`Ejercicio 4: [${Ejercicio4(num1)}]`);
console.log(`Ejercicio 4: [${Ejercicio4(num3)}]`);


/* --- Ejercicio 05 --- */

const Ejercicio5 = (base, altura) => base * altura; //solo retorno

console.log(`Ejercicio 5: [${Ejercicio5(num1, num2)}]`);


/* --- Ejercicio 065 --- */

const CelsiusToFahrenheit = (a) => a * 1.8 + 32; //solo retorno
const FahrenheitToCelsius = (a) => (a - 32) / 1.8; //solo retorno

console.log(`Ejercico 6: conversión [${num1}] Grados Celsius son [${CelsiusToFahrenheit(num1).toFixed(2)}] Grados Fahrenheit`);
console.log(`Ejercico 6: conversión [${num2}] Grados Fahrenheit son [${FahrenheitToCelsius(num2).toFixed(2)}] Grados Celsius`);